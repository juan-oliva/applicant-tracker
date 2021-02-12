import React from "react";
import "./ApplicantForm.css";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const ApplicantForm = (props) => {
  return (
    <div>
      <Modal isOpen={props.addNew}>
        <ModalHeader>Add a new job candidate</ModalHeader>
        <ModalBody>
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                value={props.name}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={props.email}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="form-control"
                value={props.phone}
                onChange={props.handleInputChange}
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
                onChange={props.handleCheckboxChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <input
                id="skills"
                type="text"
                name="skills"
                className="form-control"
                value={props.skills}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience:</label>
              <input
                id="experience"
                type="text"
                name="experience"
                className="form-control"
                value={props.experience}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="form-group file">
              <label htmlFor="resume">Resume:</label>
              <input
                id="resume"
                type="file"
                className="form-control-file"
                onChange={props.handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="englishLevel">English level:</label>
              <select
                id="englishLevel"
                name="englishLevel"
                className="custom-select"
                value={props.englishLevel}
                onChange={props.handleSelectChange}
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
                className="form-control"
                value={props.role}
                onChange={props.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="evaluator">Evaluator:</label>
              <select
                id="evaluator"
                name="evaluator"
                className="custom-select"
                value={props.evaluator}
                onChange={props.handleSelectChange}
              >
                <option>Choose</option>
                <option>Biswajit</option>
                <option>Saravanan</option>
                <option>Pallav</option>
                <option>Jabin</option>
              </select>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-3"></div>
                <div className="col-3 "></div>
                <div className="col-3 mt-3 pl-1">
                  <button
                    className="btn btn-secondary float-right"
                    onClick={props.toggleForm}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-3 mt-3 pr-0">
                  <button className="btn btn-primary float-right" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

ApplicantForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  relocate: PropTypes.bool,
  skills: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  englishLevel: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  evaluator: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
