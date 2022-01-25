import { useState } from "react";
import { Col, Card, Button, ButtonGroup, Modal } from "react-bootstrap";

const Project = (props) => {
  const { gitHub, title, description, deployed_site, card_image } =
    props.project;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xxl={3} xl={3} lg={4} md={5} sm={6} xs={12}>
        <Card style={{ marginTop: "5%", width: "16rem" }}>
          <Card.Img variant="top" height={200} src={card_image} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>{" "}
      </Col>
    </>
  );
};

export default Project;
