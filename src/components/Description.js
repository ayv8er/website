import styled from "styled-components";
import { CodeIcon } from "@heroicons/react/outline";
import { user } from "../data";

const Description = ({ toDisplay }) => {
  return (
    <StyledDescription>
      {toDisplay === "intro" && (
        <div className="description d-flex justify-content-center align-items-center h-100 w-100 p-3">
          <p>
            {user.intro1}{" "}
            <a href="https://www.bloomberg.com/profile/company/3074Z:US">
              multi-national
            </a>
            , a<a href="https://www.underdogdevs.org/"> non-profit,</a> a few
            SaaS start-ups ranging from an{" "}
            <a href="https://www.linkedin.com/company/realpeoplesratings/">
              online reputation management firm
            </a>{" "}
            to a Series B funded
            <a href="https://magic.link/"> crypto start-up</a>. {user.intro2}
          </p>
        </div>
      )}
      {toDisplay === "frontend" && (
        <div className="w-100 p-3">
          <p className="w-100 d-flex justify-content-center">
            {user.recentFront}
          </p>
          <div className="d-flex flex-wrap p-4">
            {user.frontendTech.map((item) => (
              <div
                key={item}
                className="description col-12 col-sm-6 col-md-4 ps-3"
              >
                <CodeIcon style={{ width: "1.2rem", marginRight: "1%" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
      {toDisplay === "backend" && (
        <div className="w-100 p-3">
          <p className="w-100 d-flex justify-content-center">
            {user.recentBack}
          </p>
          <div className="d-flex flex-wrap p-4">
            {user.backendTech.map((item) => (
              <div
                key={item}
                className="description col-12 col-sm-6 col-md-4 ps-3"
              >
                <CodeIcon style={{ width: "1.2rem", marginRight: "1%" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledDescription>
  );
};

export default Description;

const StyledDescription = styled.div`
  @media only screen and (max-width: 575px) {
    .description {
      text-align: center;
    }
  }
}
`;
