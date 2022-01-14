import { useState } from "react";
import { Card, Button, ButtonGroup, Modal } from "react-bootstrap";
import styled from "styled-components";

const Project = (props) => {
  const { gitHub, title, description, deployed_site, card_image } =
    props.project;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledProject>
      <div className="col">
        <Card border="info" style={{ width: "15rem" }}>
          <Card.Img variant="top" height={200} src={card_image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <ButtonGroup size="sm" className="mb-2">
              <Button
                className="contact_button"
                variant="secondary"
                href={deployed_site}
              >
                Website
              </Button>
              <Button
                className="contact_button"
                variant="secondary"
                href={gitHub}
              >
                GitHub
              </Button>
              <Button
                onClick={handleShow}
                className="contact_button"
                variant="secondary"
              >
                Description
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  .col {
    margin-top: 20%;
    text-align: center;
  }
  .contact_button {
  }
`;

export default Project;
