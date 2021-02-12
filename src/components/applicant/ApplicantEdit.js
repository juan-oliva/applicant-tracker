import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class ApplicantEdit extends Component {
  constructor(props) {
    super(props);
    const toEdit = this.props.selectedEdit;
    this.state = {
      name: toEdit.name,
      email: toEdit.email,
      phone: toEdit.phone,
      relocate: toEdit.relocate,
      skills: toEdit.skills,
      experience: toEdit.experience,
      englishLevel: toEdit.englishLevel,
      role: toEdit.role,
      evaluator: toEdit.evaluator,
      resume: toEdit.resume
    };
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

  handleUpdateApplicant = (event) => {
    event.preventDefault();
    this.props.updateApplicant(this.props.selectedEdit.id, this.state);
  };

  handleToggleEdit = (event) => {
    event.preventDefault();
    this.props.toggleEditForm();
  };

  render() {
    const {
      name,
      email,
      phone,
      relocate,
      skills,
      experience,
      englishLevel,
      role,
      evaluator,
      resume
    } = this.state;

    return (
      <div>
        <Modal isOpen={this.props.isEditing}>
          <ModalHeader>Now editing {name}</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleUpdateApplicant}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-check mb-2 mt-2">
                <label htmlFor="relocate" className="form-check-label mr-4">
                  Willing to relocate?
                </label>
                <input
                  id="relocate"
                  type="checkbox"
                  name="relocate"
                  className="form-check-input"
                  defaultChecked={relocate}
                  onChange={this.handleCheckboxChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills:</label>
                <input
                  id="skills"
                  type="text"
                  name="skills"
                  value={skills}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience:</label>
                <input
                  id="experience"
                  type="text"
                  name="experience"
                  value={experience}
                  className="form-control"
                  onChange={this.handleSelectChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="englishLevel">English level:</label>
                <select
                  id="englishLevel"
                  name="englishLevel"
                  value={englishLevel}
                  className="custom-select"
                  onChange={this.handleSelectChange}
                >
                  <option>Choose</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Native</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input
                  id="role"
                  type="text"
                  name="role"
                  value={role}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="evaluator">Evaluator:</label>
                <select
                  id="evaluator"
                  name="evaluator"
                  value={evaluator}
                  className="custom-select"
                  onChange={this.handleSelectChange}
                >
                  <option>Choose</option>
                  <option>Biswajit</option>
                  <option>Saravanan</option>
                  <option>Pallav</option>
                  <option>Jabin</option>
                </select>
              </div>
              <button
                className="btn btn-secondary float-right"
                onClick={this.handleToggleEdit}
              >
                Cancel
              </button>
              <button className="btn btn-primary float-right">Submit</button>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ApplicantEdit;
