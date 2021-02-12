import React, { Component } from "react";

export class ApplicantItem extends Component {
  constructor(props) {
    super(props);
    this.handleSelectApplicantEdit = this.handleSelectApplicantEdit.bind(this);
    this.handleSelectApplicantFullDescription = this.handleSelectApplicantFullDescription.bind(
      this
    );
  }
  handleSelectApplicantEdit() {
    this.props.selectApplicantEdit(this.props.id);
    this.props.handleToggleEdit();
  }
  handleSelectApplicantFullDescription() {
    this.props.selectApplicantFullDescription(this.props.id);
    this.props.handleFullView();
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.status}</td>
        <td>{this.props.role}</td>
        <td>
          <div className="container">
            <div className="row">
              <div className="col-xs pr-0">
                <button
                  className="btn btn-primary"
                  onClick={this.handleSelectApplicantEdit}
                >
                  Edit <i className="fas fa-edit"></i> 
                </button>
              </div>
              <div className="col-xs pl-1">
                <button
                  className="btn btn-info"
                  onClick={this.handleSelectApplicantFullDescription}
                >
                  More <i className="fas fa-info-circle"></i> 
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
