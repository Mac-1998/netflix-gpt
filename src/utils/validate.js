export const checkValidData = (email, password) => {
  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const isPasswordValid = /^[^\s]{4,60}$/.test(password);

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters.";

  return null;
};
