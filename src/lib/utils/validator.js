class Validator {
  validateInputs(inputData) {
    let errorMessage = "";
    if (!inputData.name) {
      errorMessage += "Please, enter the candidate's name \n";
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(inputData.email)) {
      errorMessage += "Please enter a valid email \n";
    }
    const validPhoneFormat = inputData.phone.match(/^\d{10}$/);
    if (!validPhoneFormat) {
      errorMessage += "Please enter a valid phone (10 digits) \n";
    }
    if (!inputData.skills) {
      errorMessage += "Please, enter the candidate's skills \n";
    }
    if(!inputData.experience) {
        errorMessage += "Please, enter the years of experience \n";
    }
    if (inputData.englishLevel === "Choose") {
      errorMessage += "Please, select a valid English level";
    }
    if(!inputData.role) {
        errorMessage += "Please, enter a role \n";
    }
    if (inputData.evaluator === "Choose") {
      errorMessage += "Please, select a valid evaluator";
    }
    if (errorMessage.length === 0) {
      return true;
    } else {
      alert(errorMessage);
      return false;
    }
  }
}

export default Validator;
