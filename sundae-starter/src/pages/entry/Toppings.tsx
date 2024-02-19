import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

const Toppings = ({ name, imagePath }) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={`http://localhost:3030${imagePath}`} alt={`${name} topping`} />
      <Form.Group
        controlId={`${name}-topping-checkbox`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  );
};

export default Toppings;
