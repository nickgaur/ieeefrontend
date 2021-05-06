import React from "react";
import "./Header.css";

import logo from "../Assets/logoiee2.svg";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <Navbar
                className="nav"
                collapseOnSelect
                expand="lg"
                variant="dark"
                fixed="top">
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="IEEE" width="200"></img>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Link to="/contact">
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">
                    <img src={logo} alt="IEEE" width="200" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link">
                                Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://ieeeditu.org.in">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>
    );
}
