export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  return password.length >= 6;
};

export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case "customer":
      return value ? "" : "Customer is required";
    case "projectname":
      return value ? "" : "Project name is required";
    case "email":
      return isValidEmail(value) ? "" : "Invalid email address";
    case "contact":
      return value && isValidPhoneNumber(value)
        ? ""
        : "Contact must be a valid 10-digit number";
    case "refnumber":
    case "projectnumber":
    case "arealocation":
    case "duedate":
    case "staff":
    case "address":
    case "status":
    case "manager":
      return value
        ? ""
        : `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    default:
      return "";
  }
};
