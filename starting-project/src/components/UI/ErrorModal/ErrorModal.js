import Card from "../Card/Card";
import Button from "../Button/Button";
import * as classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onExit}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onExit}>Close</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
