import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">Wanna reach out to me? I am open to discussion!</p>
              {/* <p className="text-white mt-3">{bio}</p> */}
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="fa fa-envelope-open mr-3"/> <a href="mailto: gshaily2901@gmail.com" className="text-info">gshaily2901@gmail.com</a> <br/>
							</div> <br />
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="fa fa-solid fa-phone mr-3"/> +17203134654<br/>
							</div>
              
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
