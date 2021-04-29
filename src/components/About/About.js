import { useContext } from "react";
import { CartContext } from "../../App";
import Contact from "../Contact/Contact";

const About = ({ count }) => {
  const context = useContext(CartContext);

  const cartStyle2 = {
    border: "1px solid blue",
    margin: "20px",
    padding: "10px",
  };
  return (
    <div>
      <div style={cartStyle2} className="text-center">
        <h2>This is About Page.</h2>
        <h3>Count: {count} </h3>
        <h4>Context Count: {context} </h4>
      </div>

      <Contact count={count}></Contact>
    </div>
  );
};

export default About;
