// Esto viene de un articulo
// https://dev.to/mconner89/passing-props-in-react-using-typescript-20lm

declare module 'myTypes' {
  type UserType = {
    dob: string,
    firstName: string,
    userBio: string,
  };

  interface UserProps {
    user: UserType,
  }
}

module.exports = {
  UserType,
  UserProps,
};