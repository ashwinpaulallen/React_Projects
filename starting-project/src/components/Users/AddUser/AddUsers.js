import { useState } from "react";
import Card from "../../UI/Card/Card";
import * as classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Inputs",
        message: "Enter Valid non-empty Inputs!!",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Enter a Valid Age!!",
      });
      return;
    }
    props.onAdd({ name: username, age: age });
    setUsername("");
    setAge("");
  };

  const OnUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const OnAgeChange = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onExit={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={OnUsernameChange}
          />
          <label htmlFor="age">Age in Years</label>
          <input id="age" type="number" value={age} onChange={OnAgeChange} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
