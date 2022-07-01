import { Component } from "react";
import RegistrForm from "../RegistrForm";
import UserInfo from "../UserInfo";

class User extends Component {
  state = {
    email: "",
    name: "",
    password: "",
  };
  addUserInfo = (obj) => {
    const { email, name, password } = obj;
    this.setState({ email, name, password });
  };
  render() {
    const { addUserInfo } = this;
    const { email, name, password } = this.state;
    return (
      <div>
        <RegistrForm onSubmit={addUserInfo} />
        <UserInfo name={name} email={email} password={password} />
      </div>
    );
  }
}
export default User;
