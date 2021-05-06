import React from "react";
import Card from "react-bootstrap/Card";
import "react-bootstrap/Container";

export default function MediaCard({ text }) {
    return (
        <div className="container-card">
            <Card
                style={{
                    maxWidth: "425px",
                    // height: "550px",
                    minHeight: "550px",
                    margin: "15px",
                    borderRadius: "20px",
                }}>
                <Card.Body
                    style={{
                        marginLeft: "-5 px",
                    }}>
                    <Card.Text
                        className="card_text"
                        style={{
                            // height: "130px",
                            fontSize: "14px",
                        }}>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
