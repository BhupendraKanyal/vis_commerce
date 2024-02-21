import React from "react";
import Team from "./Team";
import { Container, Row, Col } from "react-bootstrap";

const TeamUpdate = () => {
  const teamMembers = [
    {
      name: "Mr Ramakrishna J Tumuluri (Aka RK)",
      subtitle: "Founder CEO",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedinProfile: "https://www.linkedin.com/in/your-linkedin-profile",
      imageSrc: "./TeamAssets/image1.svg",
    },
    {
      name: "Mr Ramakrishna ",
      subtitle: "Founder CEO",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedinProfile: "https://www.linkedin.com/in/your-linkedin-profile",
      imageSrc: "./TeamAssets/image1.svg",
    },
    
    // Add more team members as needed
  ];
  return (
    <Container>
      <Row>
        {teamMembers.map((data, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mx-4">
            <Team
              name={data.name}
              subtitle={data.subtitle}
              description={data.description}
              linkedinProfile={data.linkedinProfile}
              imageSrc={data.imageSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamUpdate;
