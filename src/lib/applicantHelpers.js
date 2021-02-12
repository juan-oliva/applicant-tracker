export const addApplicant = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random() * 100000);

export const findById = (id, list) =>
  list.find((applicant) => applicant.id === id);

export const updateApplicantList = (list, updated) => {
  const updatedIndex = list.findIndex(
    (applicant) => applicant.id === updated.id
  );
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1),
  ];
};
