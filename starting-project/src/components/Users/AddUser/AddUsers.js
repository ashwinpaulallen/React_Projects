import { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import * as classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../wrapper/Wrapper";

const AddUser = (props) => {
  const inputName = useRef();
  const inputAge = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const username = inputName.current.value;
    const age = inputAge.current.value;
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
    inputName.current.value = "";
    inputAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onExit={errorHandler}
          ref={inputName}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input id="username" type="text" ref={inputAge} />
          <label htmlFor="age">Age in Years</label>
          <input id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
