import { Container, Card, Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const Contact = () => {
  const user = {
    linkedIn: "https://www.linkedin.com/in/rjo2/",
    gitHub: "https://github.com/ayv8er",
    resume:
      "https://drive.google.com/file/d/1UI26-K1z6RwwQ_Wcgjvbhhc-IMzd-GQO/view?usp=sharing",
  };

  return (
    <StyledContact>
      <Container fluid>
        <div className="contact_container">
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
                  variant="outline-dark"
                >
                  <i className="lni lni-linkedin-original"></i>
                </Button>
                <Button
                  className="contact_button"
                  href={user.gitHub}
                  variant="outline-dark"
                >
                  <i className="lni lni-github-original"></i>
                </Button>
                <Button
                  className="contact_button"
                  href={user.resume}
                  variant="outline-dark"
                >
                  Resume
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .contact_container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
  }
  .contact_button {
    margin: 5%;
  }
`;

export default Contact;
