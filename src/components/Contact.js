import styled from "styled-components";
import { contact } from "../data";

const Contact = () => {
  return (
    <StyledContact className="d-flex justify-content-center align-items-evenly pb-5">
      <div className="d-flex flex-column align-items-center w-75">
        <h3 className="mt-5">Let's Build!</h3>
        <div className="d-flex justify-content-around flex-wrap w-100">
          {contact.map((item) => (
            <div
              key={item.name}
              className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center mt-5"
            >
              <a href={item.link}>
                <img src={item.icon} alt={item.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  h2 {
    color: #ced4da;
  }
  a:hover {
    width: 69px;
    height: 69px;
  }
  font-family: Arvo;
  font-size: 1.1rem;
  line-height: 2.1;
  color: rgba(255, 255, 255, 0.55);
  background-color: rgba(255, 255, 255, 0.25);
  min-height: 90vh;
  height: 90%;
  h1 {
    color: #ced4da;
  }
`;

export default Contact;
