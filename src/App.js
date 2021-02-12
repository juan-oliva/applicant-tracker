import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApplicantHome from "./components/applicant/ApplicantHome";
import Applicant from "./components/applicant/Applicant";
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar color="dark">
          <Container>
            <NavbarBrand className="mr-auto navbar-link">
              Applicant Tracker
            </NavbarBrand>
            <NavItem>
              <NavLink href="/" className="nav-item">
              <i className="fas fa-home"></i>
              </NavLink>
            </NavItem>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={ApplicantHome} />
            <Route exact path="/applicants" component={Applicant} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
