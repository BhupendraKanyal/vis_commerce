import React from "react";
import Team from "./Team";
import { Container, Row, Col } from "react-bootstrap";
import RamakrishnaImage from "./TeamAssets/Ramakrishna.webp";
import Mohit from "./TeamAssets/mohit.webp";
import Archana from "./TeamAssets/Archana.webp";
import Jigish from "./TeamAssets/Jigish.webp";
import JayPatel from "./TeamAssets/Jay Patel.webp";
import Akhilesh from "./TeamAssets/Akhilesh.webp";
import Amit from "./TeamAssets/Amit.webp";
import Heena from "./TeamAssets/Heena Grover.webp";
import Aakansha from "./TeamAssets/Aakansha Puri.webp";
import Akshay from "./TeamAssets/Akshay Bhojak.webp";

const TeamUpdate = () => {
  const teamMembers = [
    {
      name: "Mr Ramakrishna J Tumuluri (Aka RK)",
      subtitle: "Founder CEO",
      linkedinProfile: "",
      imageSrc: RamakrishnaImage,
    },
    {
      name: "Mr. Mohit Patel",
      subtitle: "Content Developer",
      linkedinProfile: "https://www.linkedin.com/in/your-linkedin-profile",
      imageSrc: require("./TeamAssets/mohit.webp"),
    },
    {
      name: "Ms. Archana Patukuri ",
      subtitle: "Software Developer",
      linkedinProfile: "",
      imageSrc: Archana,
    },
    {
      name: "Jigish Patel",
      subtitle: "Graphic & UI Designer & Video Editor",
      linkedinProfile: "",
      imageSrc: Jigish,
    },
    {
      name: "Jay Patel",
      subtitle: "QA Specialist",
      linkedinProfile: "",
      imageSrc: JayPatel,
    },
    {
      name: "Akhilesh",
      subtitle: "Akhilesh",
      linkedinProfile: "",
      imageSrc: Akhilesh,
    },
    {
      name: "Amit",
      subtitle: "Software Developer",
      linkedinProfile: "",
      imageSrc: Amit,
    },
    {
      name: "Heena Grover",
      subtitle: "Marketing Specialist",
      linkedinProfile: "",
      imageSrc: Heena,
    },
    {
      name: "Aakansha Puri",
      subtitle: "Marketing Specialist",
      linkedinProfile: "",
      imageSrc: Aakansha,
    },
    {
      name: "Akshay Bhojak",
      subtitle: "Unity Developer, 3D Content Developer",
      linkedinProfile: "",
      imageSrc: Akshay,
    },
    // Add more team members as needed
  ];
  return (
    <Container>
     <div className="team-container">
     <Row className="centerCard ">
        {teamMembers.map((data, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={3} className="">
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
     </div>
    </Container>
  );
};

export default TeamUpdate;
