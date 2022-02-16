import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";

import { useAuthDispatch } from "../../context/auth";
import Users from "./Users";

const GET_MESSAGES = gql`
  query getUsers($from: String!) {
    getMessages(from: $from) {
      uuid
      from
      to
      content
      createdAt
    }
  }
`;

export default function Home({ history }) {
  const dispatch = useAuthDispatch();

  const [selectedUser, setSelectedUser] = useState(null);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };

  const [getMessages, { loading: messagesLoading, data: messagesData }] =
    useLazyQuery(GET_MESSAGES);

  useEffect(() => {
    if (selectedUser) {
      getMessages({ variables: { from: selectedUser } });
    }
  }, [selectedUser]);

  return (
    <Fragment>
      <Row className="bg-white  mb-1">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link to="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="link">Register</Button>
          </Link>
          <Button variant="link" onClick={logout}>
            Logout
          </Button>
        </div>
      </Row>
      <Row className="bg-white">
        <Users setSelectedUser={setSelectedUser} />
        <Col xs={8}>
          {messagesData && messagesData.getMessages.length > 0 ? (
            messagesData.getMessages.map((message) => (
              <p key={message.uuid}>{message.content}</p>
            ))
          ) : (
            <p>You are now connected!!</p>
          )}
        </Col>
      </Row>
    </Fragment>
  );
}
