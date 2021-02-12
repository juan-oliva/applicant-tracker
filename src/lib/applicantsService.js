const URL = "http://localhost:8080/https://candidatetracker.herokuapp.com";

export const loadApplicants = () => {
  return fetch(`${URL}/getCandidates`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error.message);
    });
};

export const createApplicant = (applicant) => {
  return fetch(`${URL}/registerCandidate`, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Accept": "application/json",
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
    // .then( response => new Promise((resolve, reject) => {
    //   if(!response.ok) {
    //     reject(new Error(response.text))
    //   }
    //   if(response) {
    //     resolve(response)
    //   }
    // }))
    .catch((error) => {
      console.log(error);
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
