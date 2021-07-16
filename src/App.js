import "./App.css";
import React from "react";
import Header from "./Component/Header/Header.jsx";

import Card from "./Component/Card/Card_main";
import Footer from "./Component/Footer/Footer.jsx";
import Page1 from "./Component/Page_main/Page_main";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-bootstrap/Carousel";

import "./Component/Carousel/carousel.css";

import Forms from "./Component/Form/Forms";
import Register from "./Component/Form/Registration form";

// import reg from "./Component/reg_form/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Temporary Json code
const page = [
    {
        id: 1,
        page_heading: "Cloud Workshop",
        image:
            "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        brief_description:
            "Microsoft Cloud Workshop (MCW) is a hands-on community development experience.",
        description:
            "Cloud Computing is the use of hardware and software to deliver a service over a network (typically theInternet). With cloud computing, users can access files and use applications from any device that can access the Internet.While these 'clouds' are the natural evolution of traditional data centers, they are distinguished by exposing resources(computation, data, and applications) as standards-based Webservices and following a 'utility' pricing model where customers are charged based on their utilization of computational resources, storage, and transfer of data.",

        li_topic_covered: [
            "Introduction to Cloud Computing",
            "SaaS, PaaS, IaaS models",
            "Introduction to Amazon Web Services",
            "Developing Applications on AWS - Static sites using S3, Cloudfront, Secure-Certificate",
        ],
        li_skills_gain: [
            "Applications on AWS",
            "Virtualisation",
            "Web Services And API.",
        ],
        li_eligibility:
            "Anybody interested in Cloud Computing Technologies, Web Development, Site and Server administration.",
        li_prerequisite: "Database skills, Programming skills, Linux",

        li_certificate_provided: "yes",
        li_date_time: "20/10/2020 - 11am",
        li_duration: "4 Hours",
        li_fee: [
            "IEEE Member(CS): ₹ 70",
            "IEEE Member(Non CS): ₹ 80",
            "Non IEEE Member: ₹ 100",
        ],
        register_link: "https://www.google.com",
    },

    {
        id: 2,
        page_heading: "Cyberdome",
        image:
            "https://cdn.pixabay.com/photo/2018/05/14/16/25/cyber-security-3400657__340.jpg",
        brief_description:
            "Cyberdome is workshop which focus on basic of Sercuity with hands on experiments.",
        description: "edsrghsd sdghdf hdfh sdfh dfffffffffsdf hf hsdfhfd",
        li_topic_covered: [
            "Introduction to Cloud Computing",
            "SaaS, PaaS, IaaS models",
            "Introduction to Amazon Web Services",
            "Developing Applications on AWS - Static sites using S3, Cloudfront, Secure-Certificate",
        ],
        li_skills_gain: [
            "Applications on AWS",
            "Virtualisation",
            "Web Services And API.",
        ],
        li_eligibility:
            "Anybody interested in Cloud Computing Technologies, Web Development, Site and Server administration.",
        li_prerequisite: "Database skills, Programming skills, Linux",

        li_certificate_provided: "yes",
        li_date_time: "20/10/2020 - 11am",
        li_duration: "4 Hours",
        li_fee: [
            "IEEE Member(CS): ₹ 70",
            "IEEE Member(Non CS): ₹ 80",
            "Non IEEE Member: ₹ 100",
        ],
        register_link: "www.google.com",
    },
    {
        id: 3,
        page_heading: "IOT",
        image: "https://wallpapercave.com/wp/wp2634177.jpg",
        brief_description:
            "Cyberdome is workshop which focus on basic of Sercuity with hands on experiments.",
        description:
            "Cloud Computing is the use of hardware and software to deliver a service over a network (typically theInternet). With cloud computing, users can access files and use applications from any device that can access the Internet.While these 'clouds' are the natural evolution of traditional data centers, they are distinguished by exposing resources(computation, data, and applications) as standards-based Webservices and following a 'utility' pricing model where customers are charged based on their utilization of computational resources, storage, and transfer of data.",
        li_topic_covered: [
            "Introduction to Cloud Computing",
            "SaaS, PaaS, IaaS models",
            "Introduction to Amazon Web Services",
            "Developing Applications on AWS - Static sites using S3, Cloudfront, Secure-Certificate",
        ],
        li_skills_gain: [
            "Applications on AWS",
            "Virtualisation",
            "Web Services And API.",
        ],
        li_eligibility:
            "Anybody interested in Cloud Computing Technologies, Web Development, Site and Server administration.",
        li_prerequisite: "Database skills, Programming skills, Linux",

        li_certificate_provided: "yes",
        li_date_time: "20/10/2020 - 11am",
        li_duration: "4 Hours",
        li_fee: [
            "IEEE Member(CS): ₹ 70",
            "IEEE Member(Non CS): ₹ 80",
            "Non IEEE Member: ₹ 100",
        ],
        register_link: "www.google.com",
    },
    {
        id: 4,
        page_heading: "Cyberdome",
        image:
            "https://cdn.pixabay.com/photo/2018/05/14/16/25/cyber-security-3400657__340.jpg",
        brief_description:
            "Cyberdome is workshop which focus on basic of Sercuity with hands on experiments.",
        description: "edsrghsd sdghdf hdfh sdfh dfffffffffsdf hf hsdfhfd",
        li_topic_covered: [
            "Introduction to Cloud Computing",
            "SaaS, PaaS, IaaS models",
            "Introduction to Amazon Web Services",
            "Developing Applications on AWS - Static sites using S3, Cloudfront, Secure-Certificate",
        ],
        li_skills_gain: [
            "Applications on AWS",
            "Virtualisation",
            "Web Services And API.",
        ],
        li_eligibility:
            "Anybody interested in Cloud Computing Technologies, Web Development, Site and Server administration.",
        li_prerequisite: "Database skills, Programming skills, Linux",

        li_certificate_provided: "yes",
        li_date_time: "20/10/2020 - 11am",
        li_duration: "4 Hours",
        li_fee: [
            "IEEE Member(CS): ₹ 70",
            "IEEE Member(Non CS): ₹ 80",
            "Non IEEE Member: ₹ 100",
        ],
        register_link: "www.google.com",
    },
    {
        id: 5,
        page_heading: "IOT",
        image:
            "https://cdn.pixabay.com/photo/2015/05/25/05/27/network-782707__340.png",
        brief_description:
            "Cyberdome is workshop which focus on basic of Sercuity with hands on experiments.",
        description: "edsrghsd sdghdf hdfh sdfh dfffffffffsdf hf hsdfhfd",
        li_topic_covered: [
            "Introduction to Cloud Computing",
            "SaaS, PaaS, IaaS models",
            "Introduction to Amazon Web Services",
            "Developing Applications on AWS - Static sites using S3, Cloudfront, Secure-Certificate",
        ],
        li_skills_gain: [
            "Applications on AWS",
            "Virtualisation",
            "Web Services And API.",
        ],
        li_eligibility:
            "Anybody interested in Cloud Computing Technologies, Web Development, Site and Server administration.",
        li_prerequisite: "Database skills, Programming skills, Linux",

        li_certificate_provided: "yes",
        li_date_time: "20/10/2020 - 11am",
        li_duration: "4 Hours",
        li_fee: [
            "IEEE Member(CS): ₹ 70",
            "IEEE Member(Non CS): ₹ 80",
            "Non IEEE Member: ₹ 100",
        ],
        register_link: "www.google.com",
    },
];

const Carousel_main = [
    {
        id: 1,
        image:
            "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        id: 2,
        image:
            "https://cdn.pixabay.com/photo/2018/05/14/16/25/cyber-security-3400657__340.jpg",
    },
    {
        id: 3,
        image:
            "https://cdn.pixabay.com/photo/2015/05/25/05/27/network-782707__340.png",
    },
];

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return null;
    }
}

function App() {
    return (
        <div className="App" id="home">
            <Router>
                <Header />

                <Switch>
                    {page.map((event) => {
                        return (
                            <Route key={event.id} path={"/" + event.id}>
                                <Page1 {...event} />
                                <ScrollToTopOnMount />
                            </Route>
                        );
                    })}
                    <Route exact path="/">
                        {/* Images on top of HomePage */}
                        <Carousel className="carousel1" status="false">
                            {Carousel_main.map((im) => {
                                return (
                                    <div key={im.id} className="carousel-item1">
                                        <img
                                            className="img-fluid"
                                            src={im.image}
                                            alt={im.id}
                                            style={{ width: "100%" }}></img>
                                    </div>
                                );
                            })}
                        </Carousel>
                        {/* <Carousel>
                            {Carousel_main.map((im) => {
                                return (
                                    <Carousel.Item
                                        style={{
                                            maxHeight: "32rem",
                                            transition: "0.5s",
                                            objectFit: "cover",
                                        }}>
                                        <img
                                            className="d-block w-100"
                                            src={im.image}
                                            alt={im.id}
                                            style={{
                                                width: "5000px !important",
                                                maxHeight: "32rem",
                                                objectFit: "cover",
                                            }}></img>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel> */}

                        <h3
                            style={{
                                textAlign: "center",
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}>
                            Upcoming Event
                        </h3>
                        <div className="Cards">
                            <div className="Cards_card" id="box7">
                                {page.map((car) => {
                                    return <Card key={car.id} {...car} />;
                                })}
                            </div>
                        </div>
                    </Route>
                    <Route path="/forms">
                        <Forms />
                    </Route>
                    <Route path="/rform">
                        <Register />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}
export default App;
