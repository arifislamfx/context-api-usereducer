import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../App";

const Contact = ({ count }) => {
  const cartStyle3 = {
    border: "1px solid black",
    margin: "20px",
    padding: "10px",
  };

  const [context, setContext] = useContext(CartContext);

  return (
    <div style={cartStyle3} className="text-center">
      <h2>This is Contact Page.</h2>
      <h3>Count: {count} </h3>
      <h5>Count: {context} </h5>
      <Button onClick={() => setContext(context + 1)} variant="danger">
        Danger
      </Button>
    </div>
  );
};

export default Contact;
