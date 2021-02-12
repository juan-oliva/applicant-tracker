const URL = "http://localhost:8080/applicants";

export const loadApplicants = () => {
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error.message);
    });
};

export const createApplicant = (applicant) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicant),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error("Unsuccessful response"));
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const saveApplicant = (applicant) => {
  return fetch(`${URL}/${applicant.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicant),
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error("Unsuccessful response"));
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
