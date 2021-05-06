import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Forms from "../Form/Forms";
// import "./Card_main.css";

export default function MediaCard({
    image,
    page_heading,
    brief_description,
    id,
    li_date_time,
    li_duration,
}) {
    return (
        <Card
            className="ca"
            id="box"
            style={{
                maxWidth: "300px",
                height: "450px",
                margin: "15px",
                borderRadius: "20px",
            }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link to={"/" + id} style={{ textDecoration: "none" }}>
                <Card.Img
                    variant="top"
                    src={image}
                    alt={page_heading}
                    style={{
                        // maxWidth: "100%",
                        // height: "auto",
                        maxHeight: "180px",
                        objectFit: "cover",
                        borderRadius: "20px 20px 0px 0px",
                    }}
                />
                <Card.Body>
                    <Card.Title className="card_title">
                        {page_heading}
                    </Card.Title>

                    <Card.Text
                        style={{
                            // height: "130px",

                            color: "gray",
                            fontSize: "14px",
                        }}>
                        {brief_description}
                    </Card.Text>

                    <Button
                        size="sm"
                        variant="outline"
                        // href={link}
                        style={{
                            position: "absolute",
                            bottom: 20,
                            color: "gray",
                            borderRadius: "13px",
                        }}>
                        {li_date_time}
                    </Button>
                    <Button
                        style={{
                            position: "absolute",
                            right: 62,
                            bottom: 20,
                            borderRadius: "10px 0px 0px 10px",
                        }}
                        size="sm"
                        variant="outline-primary">
                        View
                        {Forms}
                    </Button>
                    <Link to="forms" style={{ textDecoration: "none" }}>
                        <Button
                            style={{
                                position: "absolute",
                                right: 10,
                                bottom: 20,
                                borderRadius: "0px 10px 10px 0px",
                            }}
                            size="sm"
                            variant="outline-success">
                            Enroll
                            {Forms}
                        </Button>
                    </Link>
                </Card.Body>
            </Link>
        </Card>
    );
}
