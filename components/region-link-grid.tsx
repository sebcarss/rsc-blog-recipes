import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { LinkCardData } from "../types/LinkCardData";

const cardStyle: object = {
  borderRadius: "2em",
  textAlign: "center",
  width: "auto",
  boxShadow: "0 5px 10px rgba(0,0,0,.2)",
  color: 'black'
};

type RegionLinkGridProps = {
  linkData: LinkCardData[];
  heading: string;
};

export default function RegionLinkGrid({ linkData, heading }: RegionLinkGridProps) {
  const links = linkData.map(({ region, gridLinkUrl }, index) => {
    return (
      <Link key={index} href={gridLinkUrl}>
        <a>
          <Col style={{ textAlign: "center", border: "black 1px solid", fontSize: "1.5rem", backgroundColor: "white" }}>
            {region}
          </Col>
        </a>
      </Link>
    );
  });

  return (
    <div>
      <Row className="mt-3">
          <h2 style={{ textAlign: "center" }}>{heading}</h2>
          <hr />
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} className="g-1 mt-1">
        {links}
      </Row>
    </div>
  );
}
