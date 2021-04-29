import { createContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Home from "./components/Home/Home";

export const CartContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const [context, setContext] = useState(0);

  const cartStyle = {
    border: "1px solid red",
    margin: "20px",
    padding: "10px",
  };

  return (
    <CartContext.Provider value={[context, setContext]}>
      <Container>
        <div style={cartStyle} className="text-center">
          <h3>
            Hello World ! This is very special react staff. Lets go Explore it.{" "}
          </h3>
          <h4>This is Apps components. Count: {count} </h4>
          <Button onClick={() => setCount(count + 1)} variant="info">
            Add Props type
          </Button>

          <h4>count: {context}</h4>
          <Button
            className="m-2"
            onClick={() => setContext(context + 1)}
            variant="danger"
          >
            context api
          </Button>
        </div>
        <div>
          <Home count={count}></Home>
        </div>
      </Container>
    </CartContext.Provider>
  );
};

export default App;
