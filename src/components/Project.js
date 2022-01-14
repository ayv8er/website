import { Card, Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const Project = (props) => {
  const { gitHub, title, description, deployed_site, card_image } =
    props.project;

  return (
    <StyledProject>
      <div className="col">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" height={240} src={card_image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <ButtonGroup size="sm" className="mb-2">
              <Button
                className="contact_button"
                variant="outline-dark"
                href={deployed_site}
              >
                Website
              </Button>
              <Button
                className="contact_button"
                variant="outline-dark"
                href={gitHub}
              >
                GitHub
              </Button>
              <Button className="contact_button" variant="outline-dark">
                Description
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  .col {
    margin: 10%;
  }
`;

export default Project;
