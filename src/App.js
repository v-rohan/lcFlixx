import logo from "../src/media/logo.png";
import "./App.css";
import video from "../src/media/videoo.mp4";
import Card from "../src/homeCard";
// test
function App() {
  return (
    <div>
      <div className="hero uk-section-primary uk-preserve-color">
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 50">
          <nav style={{ zIndex: "2" }} className="uk-navbar-container">
            <div className="uk-container uk-container-expand">
              <div uk-navbar>
                <ul className="uk-navbar-nav">
                  <li className="uk-active">
                    <a href="app.js">
                      <img className="logo-nav" src={logo} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* #E30914 */}
        <video className="vid-hero" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="content">
            <h1>Welcome Heading</h1>
            <p>
              {" "}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit,{" "}
            </p>
            <a href="" className="btn-hero">
              Watch <span uk-icon="icon:play"> </span>
            </a>
          </div>
          <div className="rating">
            <a href="">18+</a>{" "}
          </div>
        </div>
      </div>
      <section className="card-sec">
        <p>Series</p>

        <div
          className="uk-grid-match uk-child-width-1-6@s uk-text-center"
          data-uk-grid
        >
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=1"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=15"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=51"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=91"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=18"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=12"></Card>
          </div>
          <div className="uk-width-expand@m">
            <Card pic="https://picsum.photos/200/300?random=21"></Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
