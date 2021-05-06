import React from "react";
import Card from "./Page_Card";
import "../Card/Card_main.css";
import "./Page_main.css";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { AddToPhotos } from "@material-ui/icons";

export default function Page_main({
  page_heading,
  image,
  description,
  li_topic_covered,
  li_skills_gain,
  li_eligibility,
  li_prerequisite,
  li_certificate_provided,
  li_date_time,
  li_duration,
  li_fee,
  register_link,
}) {
  return (
    <div className="page_main">
      <a href="#">
        <div className="backToTop">
          <ExpandLessIcon
            style={{ color: "#fff", height: "auto", width: "100%" }}
          />
        </div>
      </a>
      <div className="col-md-12">
        <Link to="/">
          <button type="button" className="close" aria-label="Close">
            <span className="cl" aria-hidden="true">
              &times;
            </span>
          </button>
        </Link>
        <center>
          <h1 className="page_heading">
            <b>{page_heading}</b>
          </h1>
        </center>
        <hr />
        <center>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src={image} alt={page_heading} className="img-fluid" />
              </div>

              <div className="col-sm-6">
                <br />
                {description}
                <br />
                <br />
                <Link to="forms">
                  <button type="button" className="btn btn-primary">
                    Enroll Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </center>
        <hr />

        <div className="Cards">
          <div className="Cards_card">
            <Card
              text={
                <div className="card-text">
                  <h5>Topic Covered</h5>
                  <ul>
                    {li_topic_covered.map((li1) => {
                      return <li key={li1}>{li1}</li>;
                    })}
                  </ul>

                  <hr />

                  <h5>Skills you will gain</h5>
                  <ul>
                    {li_skills_gain.map((li2) => {
                      return <li key={li2}>{li2}</li>;
                    })}
                  </ul>

                  <hr />

                  <h5>Eligibility</h5>
                  <ul>
                    <li>{li_eligibility}</li>
                  </ul>
                  <hr />
                </div>
              }
            />

            <Card
              text={
                <div className="card-text">
                  <h5>Prerequisite</h5>
                  <ul>
                    <li>{li_prerequisite}</li>
                  </ul>
                  <hr />

                  <h5>Certificate Provided</h5>
                  <ul>
                    <li>{li_certificate_provided}</li>
                  </ul>
                  <hr />

                  <h5>Date & Time</h5>
                  <ul>
                    <li>{li_date_time}</li>
                  </ul>
                  <hr />

                  <h5>Duration</h5>
                  <ul>
                    <li>{li_duration}</li>
                  </ul>
                  <hr />

                  <h5>Fee</h5>
                  <ul>
                    {li_fee.map((li3) => {
                      return <li key={li3}>{li3}</li>;
                    })}
                  </ul>
                  <hr />
                </div>
              }
            />
          </div>
          <br />
          <br />
          <center>
            <Link to="forms">
              <button type="button" className="btn btn-primary">
                Enroll Here
              </button>
            </Link>
          </center>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
