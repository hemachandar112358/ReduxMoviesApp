function About() {
  return (
    <div>
      <div className="card mt-5 ml-5" style={{ width: "50%" }}>
        <div className="card-header" style={{ fontWeight: "bold" }}>
          About Page
        </div>
        <div className="card-body">
          <p className="card-text">
            Build with help of OMDB API. To learn more visit{" "}
            <a href="http://www.omdbapi.com/" target="_blank">
              OMDB Site
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
