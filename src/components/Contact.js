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
        <div className="row row-cols-auto justify-content-center"></div>
        <div className="row row-cols-auto justify-content-center">
          <div className="col">
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
          </div>
        </div>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .row {
    padding-top: 10%;
  }
  @media only screen and (max-width: 790px) {
    .row {
      padding-top: 20%;
    }
  }
  @media only screen and (max-width: 395px) {
    .row {
      padding-top: 40%;
    }
  }
`;

export default Contact;
