import React, { Component } from "react";
import { ApplicantForm, ApplicantTable, ApplicantFullDescription } from "./";
import ApplicantEdit from "./ApplicantEdit";
import {
  loadApplicants,
  createApplicant,
  saveApplicant,
} from "../../lib/applicantService";
import {
  addApplicant,
  generateId,
  findById,
  updateApplicantList,
} from "../../lib/applicantHelpers";
import { Container, Button } from "reactstrap";
import Validator from "../../lib/utils/validator";

class Applicant extends Component {
  constructor() {
    super();
    this.validator = new Validator();
  }
  state = {
    addNew: false,
    edit: false,
    fullDescription: false,
    selectedEdit: null,
    selectedFullDescription: null,
    applicants: [],
    name: "",
    email: "",
    phone: "",
    relocate: false,
    skills: "",
    experience: "",
    englishLevel: "",
    role: "",
    evaluator: "",
    resume: null,
  };

  componentDidMount() {
    loadApplicants().then((applicants) => {
      this.setState({ applicants });
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelectChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFileChange = (event) => {
    this.setState({
      resume: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId();
    const newApplicant = {
      id: newId,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.role,
      experience: this.state.experience,
      englishLevel: this.state.englishLevel,
      skills: this.state.skills,
      evaluator: this.state.evaluator,
      relocate: this.state.relocate,
      resume: this.state.resume,
      status: "active",
    };
    if (this.validator.validateInputs(newApplicant)) {
      const updatedApplicants = addApplicant(
        this.state.applicants,
        newApplicant
      );
      this.setState({
        applicants: updatedApplicants,
        name: "",
        email: "",
        phone: "",
        reolcate: false,
        skills: "",
        experience: "",
        englishLevel: "",
        role: "",
        evaluator: "",
        resume: null,
        addNew: false,
      });
      createApplicant(newApplicant).then(() => console.log("Applicant added"));
    }
  };

  updateApplicant = (id, updated) => {
    const applicantToUpdate = findById(id, this.state.applicants);
    const updatedApplicant = Object.assign(applicantToUpdate, updated);
    if (this.validator.validateInputs(updatedApplicant)) {
      const updatedApplicantList = updateApplicantList(
        this.state.applicants,
        updatedApplicant
      );
      this.setState({
        applicants: updatedApplicantList,
        edit: false,
      });
      saveApplicant(updatedApplicant).then(() =>
        console.log("Updated Applicant")
      );
    }
  };

  selectApplicantEdit = (id) => {
    const applicantToEdit = findById(id, this.state.applicants);
    this.setState({
      selectedEdit: applicantToEdit,
    });
  };

  selectApplicantFullDescription = (id) => {
    const applicantFullDescription = findById(id, this.state.applicants);
    this.setState({
      selectedFullDescription: applicantFullDescription,
    });
  };

  toggleCreateForm = () => {
    this.setState((prevState) => ({
      addNew: !prevState.addNew,
      name: "",
      email: "",
      phone: "",
      relocate: false,
      skills: "",
      experience: "",
      englishLevel: "",
      role: "",
      evaluator: "",
      resume: null
    }));
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  toggleFullView = () => {
    this.setState((prevState) => ({
      fullDescription: !prevState.fullDescription,
    }));
  };

  render() {
    const {
      name,
      email,
      phone,
      // relocate,
      relocate,
      skills,
      // experience,
      experience,
      englishLevel,
      // role,
      role,
      // evaluator,
      evaluator,
      resume,
      selectedEdit,
      selectedFullDescription,
      addNew,
      edit,
      fullDescription,
    } = this.state;

    return (
      <div>
        <Container>
          <Button onClick={this.toggleCreateForm} className="float-right">
            <i className="fas fa-user-plus"></i> Add New
          </Button>
          <ApplicantTable
            applicants={this.state.applicants}
            handleToggleEdit={this.toggleEditForm}
            handleFullView={this.toggleFullView}
            selectApplicantEdit={this.selectApplicantEdit}
            selectApplicantFullDescription={this.selectApplicantFullDescription}
          />
          {addNew && (
            <ApplicantForm
              name={name}
              email={email}
              phone={phone}
              relocate={relocate}
              skills={skills}
              experience={experience}
              englishLevel={englishLevel}
              role={role}
              evaluator={evaluator}
              resume={resume}
              addNew={addNew}
              toggleForm={this.toggleCreateForm}
              handleInputChange={this.handleInputChange}
              handleSelectChange={this.handleSelectChange}
              handleCheckboxChange={this.handleCheckboxChange}
              handleFileChange={this.handleFileChange}
              handleSubmit={this.handleSubmit}
            />
          )}

          {edit && selectedEdit && (
            <ApplicantEdit
              isEditing={edit}
              toggleEditForm={this.toggleEditForm}
              selectedEdit={selectedEdit}
              updateApplicant={this.updateApplicant}
            />
          )}
          {fullDescription && selectedFullDescription && (
            <ApplicantFullDescription
              isFullViewing={fullDescription}
              handleFullView={this.toggleFullView}
              selectedFullDescription={selectedFullDescription}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default Applicant;
