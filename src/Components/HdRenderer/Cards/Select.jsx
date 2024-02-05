import React from "react";
import { Col, Form } from "react-bootstrap";
import select from "../assets/select.svg";

const Select = ({ id }) => {
  return (
    <Col xs={12} md={10} lg={10}>
      <Form.Select
        style={{
          width: "205px",
          height: "56px",
          backgroundColor: id === 0 ? "#FF4233" : "",
          color: "#ffffff",
          border: "1px solid #ff4233",
          fontSize: "20px",
          textAlign: "center",
          backgroundImage: `url(${select}), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 12'><path d='M0 0l8 6-8 6z' fill='%23fff'/></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 15px center", // Adjust position of the arrow
          paddingLeft: "10px", // Adjust for the arrow width
        }}
        className="form-control form width"
        required
      >
        <option style={{ backgroundColor: "black", fontSize: "20px" }} value="">
          Select Screen
        </option>
      </Form.Select>
    </Col>
  );
};

export default Select;
