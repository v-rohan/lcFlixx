import "./App.css";
// test
function App() {
  return (
    <ul data-uk-accordion>
    <li className="uk-open">
        <a className="uk-accordion-title">Item 1</a>
        <div className="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <a className="uk-accordion-title" >Item 2</a>
        <div className="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <a className="uk-accordion-title">Item 3</a>
        <div className="data-uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code> src / App.js </code> and save to reload.{" "}
    //     </p>{" "}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React{" "}
    //     </a>{" "}
    //   </header>{" "}
    // </div>
  );
}

export default App;
