import React from "react";
import "./Footer.css";
import "react-bootstrap/dist/react-bootstrap";
import "react-bootstrap/";

import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
} from "@material-ui/icons";

export default function Footer() {
    return (
        <div>
            <footer className="w3-container w3-padding-32 w3-indigo" id="about">
                <div className="w2-row-padding">
                    <div className="w2-second container">
                        <h3 align="center">ABOUT US</h3>
                        <p align="justify">
                            The IEEE Computer Society is the world’s leading
                            membership organization dedicated to computer
                            science and technology. Serving more than 60,000
                            members, the IEEE Computer Society is the trusted
                            information, networking, and career-development
                            source for a global community of technology leaders
                            that includes researchers, educators, software
                            engineers, IT professionals, employers, and
                            students. The IEEE Computer Society sponsors more
                            than 200 technical conferences and events each year,
                            including the industry-oriented “Rock Stars” series,
                            all over the world, aimed at research and industry
                            professionals. Our publications are peer-reviewed,
                            indexed, and authored by technology thought leaders
                            worldwide, and include 17 scholarly journals and 13
                            magazines featuring the latest technology trends. We
                            also offer cutting-edge products such as the
                            myComputer app (available for iOS or Android), that
                            provide unprecedented user-driven access to our
                            content, and our Digital Library with more than
                            550,000 articles and papers spanning the full
                            spectrum of technology.
                        </p>
                    </div>
                    <div className="w3-third">
                        <center>
                            <h3>Social Media</h3>
                            <p>
                                <div className="w3-panel w3-large">
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="https://www.facebook.com/pg/ieeeditu">
                                        <Facebook />
                                    </a>
                                    &nbsp; &nbsp; &nbsp;
                                    <a href="https://www.instagram.com/ieeeditu">
                                        <Instagram />
                                    </a>
                                    &nbsp; &nbsp; &nbsp;
                                    <a href="https://github.com/ieeeditu">
                                        <GitHub />
                                    </a>
                                    &nbsp; &nbsp; &nbsp;
                                    <a href="https://fr.linkedin.com/company/ieeeditu">
                                        <LinkedIn />
                                    </a>
                                    &nbsp; &nbsp; &nbsp;
                                    <a href=" #">
                                        <Twitter />
                                    </a>
                                    &nbsp; &nbsp; &nbsp;
                                </div>
                            </p>
                        </center>
                    </div>
                    <div className="w3-black w3-center w3-padding-24">
                        <center>
                            <p>
                                Contact Us :{" "}
                                <a href="mailto:ieee@dituniversity.edu.in">
                                    ieee@dituniversity.edu.in
                                </a>
                                <br />
                                Copyright © IEEE DITU {new Date().getFullYear()}{" "}
                                <br /> Powered by{" "}
                                <a
                                    href="https://ieeeditu.org.in"
                                    title=" IEEE Computer Society"
                                    className="w3-hover-opacity">
                                    IEEE Student Branch
                                </a>
                            </p>
                        </center>
                    </div>
                </div>
            </footer>
        </div>
    );
}
