import "./App.css";
import logo from "../src/media/logoR.png";
// test
function App(props) {
  return (
    <a class="wrap" href={props.adr}>
       <img src={logo} alt="logo" />
      <div
        style={{ backgroundImage: "url(" + props.pic + ")" }}
        className="homeCard"
      >
       
      </div>
    </a>
  );
}

export default App;
