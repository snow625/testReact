import PropTypes from "prop-types";
const UserInfo = (props) => {
  const { email, name, password } = props;
  return (
    <ul>
      <li>email: {email}</li>
      <li>name: {name}</li>
      <li>password: {password}</li>
    </ul>
  );
};

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default UserInfo;
