const SubNavhead = ({ toDisplay, displayHandler }) => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <p
        onClick={() => displayHandler("intro")}
        className={
          toDisplay === "intro"
            ? "text-white text-decoration-underline sub-link m-2"
            : "sub-link m-2"
        }
      >
        Intro
      </p>
      <p
        onClick={() => displayHandler("frontend")}
        className={
          toDisplay === "frontend"
            ? "text-white text-decoration-underline sub-link m-2"
            : "sub-link m-2"
        }
      >
        Frontend
      </p>
      <p
        onClick={() => displayHandler("backend")}
        className={
          toDisplay === "backend"
            ? "text-white text-decoration-underline sub-link m-2"
            : "sub-link m-2"
        }
      >
        Backend
      </p>
    </div>
  );
};

export default SubNavhead;
