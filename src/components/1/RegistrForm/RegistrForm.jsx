import { Component } from "react";
import PropTypes from "prop-types";

class RegistrForm extends Component {
  state = {
    email: "",
    name: "",
    password: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ email: "", name: "", password: "" });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, name, password } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="enter email"
          />
        </label>
        <label>
          name
          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="enter name"
          />
        </label>
        <label>
          password
          <input
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="enter password"
          />
        </label>
        <button type="submit">sign in</button>
      </form>
    );
  }
}

RegistrForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrForm;
