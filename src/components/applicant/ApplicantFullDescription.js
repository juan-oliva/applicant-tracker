import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export const ApplicantFullDescription = (props) => {
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
    status,
  } = props.selectedFullDescription;
  return (
    <div>
      <Modal isOpen={props.isFullViewing}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          <div>
            <ListGroup>
              <ListGroupItem>
                <strong>Email: </strong> {email}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Phone: </strong> {phone}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Willing to Relocate: </strong> {relocate ? "Yes" : "No"}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Skills: </strong> {skills}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Years of Experience: </strong> {experience}
              </ListGroupItem>
              <ListGroupItem>
                <strong>English Level: </strong> {englishLevel}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Role: </strong> {role}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Current Status: </strong> {status}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Delivery Manager: </strong> {evaluator || "Bis"}
              </ListGroupItem>
            </ListGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={props.handleFullView}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
