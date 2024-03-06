import React from "react";
import { Form } from "react-bootstrap"; // Removed unused import

const Select = () => { // Added id as a prop
  return (
    <Form.Select
      style={{
        width: "124px",
        height: "40px",
        backgroundColor:  "" , // Using id from props
        color: "#ffffff",
        border: "1px solid #ff4233",
        fontSize: "10px",
        textAlign: "center",
      }}
      className="form-control form width"
      required
    >
      <option style={{ backgroundColor: "black", fontSize: "10px" }} value="">
        Select Screen
      </option>
    </Form.Select>
  );
};

export default Select;
