import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import styled from "styled-components";

const Contact = () => {
  const user = {
    linkedIn: "https://www.linkedin.com/in/rjo2/",
    gitHub: "https://github.com/ayv8er",
    resume:
      "https://drive.google.com/file/d/1IFsWFRSiysQwLAGKlCuOtalLjpYJ7rDB/view?usp=sharing",
  };

  return (
    <StyledContact>
      <Container fluid>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col xxl={4} xl={5} lg={6} md={8} sm={10} xs={12}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Contact Richard</Card.Title>
                <Card.Text>
                  via LinkedIn, GitHub, or email/phone from Resume
                </Card.Text>
                <ButtonGroup size="lg" className="mb-2">
                  <Button
                    className="contact_button"
                    href={user.linkedIn}
                    variant="secondary"
                  >
                    <i className="lni lni-linkedin-original"></i>
                  </Button>
                  <Button
                    className="contact_button"
                    href={user.gitHub}
                    variant="secondary"
                  >
                    <i className="lni lni-github-original"></i>
                  </Button>
                  <Button
                    className="contact_button"
                    href={user.resume}
                    variant="secondary"
                  >
                    Resume
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .justify-content-center {
    padding-top: 10%;
  }
`;

export default Contact;
