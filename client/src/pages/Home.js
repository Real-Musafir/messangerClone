import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthDisptach } from "../context/auth";

export default function Home({ history }) {
  const dispatch = useAuthDisptach();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };

  return (
    <Row className="bg-white justify-content-around">
      <Link to="/login">
        <Button variant="link">Login</Button>
      </Link>

      <Link to="/register">
        <Button variant="link">Register</Button>
      </Link>

      <Button variant="link" onClick={logout}>
        Logout
      </Button>
    </Row>
  );
}
