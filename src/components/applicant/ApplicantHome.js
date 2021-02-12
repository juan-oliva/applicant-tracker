import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "reactstrap";

function ApplicantHome() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-4">Welcome to Applicant Tracker</h1>
          <p className="lead">
            Keep track of potential job candidates
          </p>
          <Link to="/applicants">
            <Button color="primary">Applicant Dashboard</Button>
          </Link>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default ApplicantHome;
