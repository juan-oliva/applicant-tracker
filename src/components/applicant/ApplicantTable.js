import React from "react";
import { ApplicantItem } from "./ApplicantItem";

export const ApplicantTable = (props) => {
  const applicantList = props.applicants.map((applicant) => (
    <ApplicantItem
      key={applicant.id}
      {...applicant}
      handleToggleEdit={props.handleToggleEdit}
      handleFullView={props.handleFullView}
      selectApplicantEdit={props.selectApplicantEdit}
      selectApplicantFullDescription={props.selectApplicantFullDescription}
    />
  ));
  return (
    <div className="Applicant">
      <table className="table table-applicants">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{applicantList}</tbody>
      </table>
    </div>
  );
};
