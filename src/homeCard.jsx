import "./App.css";
import logo from "../src/media/logoR.png";
// test
function App(props) {
  return (
    <a href={props.adr}>
      <div
        style={{ backgroundImage: "url(" + props.pic + ")" }}
        className="homeCard"
      >
        <img src={logo} alt="logo" />
      </div>
    </a>
  );
}

export default App;
