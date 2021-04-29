import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../App";
import About from "../About/About";

const Home = ({ count }) => {
  const [context, setContext] = useContext(CartContext);

  const cartStyle1 = {
    border: "1px solid green",
    margin: "20px",
    padding: "10px",
  };
  return (
    <div>
      <div style={cartStyle1} className="text-center">
        <h2>This is Home Page. </h2>
        <h3>Count: {count} </h3>
        <h5>Context count: {context} </h5>
        <Button onClick={() => setContext(context + 1)} variant="warning">
          context
        </Button>
      </div>

      <About count={count}></About>
    </div>
  );
};

export default Home;
