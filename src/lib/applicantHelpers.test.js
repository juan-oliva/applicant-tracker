import {
  addApplicant,
  findById,
} from "./applicantHelpers";

test("addApplicant should not mutate the existing applicants array", () => {
  const startApplicants = [
    {
      id: 1,
      name: "one",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
    {
      id: 2,
      name: "two",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
  ];
  const newApplicant = {
    id: 3,
    name: "three",
    email: "email@email.com",
    phone: "1234567890",
    relocate: false,
    skills: "skill_1, skill_2",
    experience: "4 years",
    englishLevel: "Advanced",
    role: "Front-End",
    evaluator: "Name",
  };
  const expected = [
    {
      id: 1,
      name: "one",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
    {
      id: 2,
      name: "two",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
    {
      id: 3,
      name: "three",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
  ];

  const result = addApplicant(startApplicants, newApplicant);

  expect(result).not.toBe(startApplicants);
});

test("findById should return the expected item from an array", () => {
  const startApplicants = [
    {
      id: 1,
      name: "one",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
    {
      id: 2,
      name: "two",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
    {
      id: 3,
      name: "three",
      email: "email@email.com",
      phone: "1234567890",
      relocate: false,
      skills: "skill_1, skill_2",
      experience: "4 years",
      englishLevel: "Advanced",
      role: "Front-End",
      evaluator: "Name",
    },
  ];
  const expected = {
    id: 2,
    name: "two",
    email: "email@email.com",
    phone: "1234567890",
    relocate: false,
    skills: "skill_1, skill_2",
    experience: "4 years",
    englishLevel: "Advanced",
    role: "Front-End",
    evaluator: "Name",
  };
  const result = findById(2, startApplicants);
  expect(result).toEqual(expected);
});