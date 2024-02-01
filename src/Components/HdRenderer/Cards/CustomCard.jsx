import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import Link from "./Link";
// import { IoIosArrowDown } from "react-icons/io";

function CustomCard({ image, title, subtitle, id }) {
  return (
    <Card
      className="card-style mb-3 mt-3"
      style={{
        borderBottom: "8px solid #FF4233",
        maxWidth: "25rem",
        borderRadius: "10px 10px 20px 20px",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ color: "red" }} className="titles">
          <div className="row align-items-center">
            {id == 0 ? (
              <div>
                <div className="col-12 col-md-6">
                  <div>
                    <h3 className="title">{title}</h3>
                    <h6 className="subtitle">{subtitle}</h6>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="text-md-right">
                      {/* {id == 0 ? <img src={shop} alt="" className="p-3" /> : ""} */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <div>
                  <div>
                    <h3 className="title">{title}</h3>
                    <h6 className="subtitle">{subtitle}</h6>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <select
              className="col-12 col-md-6 col-lg-4 form-control form"
              required
            >
              <option className="form" value="">
                Select Screen
              </option>
            </select>
          </div>
          <Link />
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
