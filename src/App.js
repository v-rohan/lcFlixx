/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../src/media/logoRed.png";
import "./App.css";
import video from "../src/media/video3.mp4";
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
      <section
        data-uk-scrollspy="target:.uk-anim; cls: uk-animation-slide-bottom-small; delay: 100; repeat:true;"
        className="card-sec mob"
      >
        <p>Series</p>
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          data-uk-slider="center:true"
        >
          <ul className="uk-grid-small uk-slider-items  uk-grid">
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=210"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=21"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=214"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=216"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=213"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=211"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=201"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=41"></Card>
              </div>
            </li>
          </ul>
          <a
            className="arrow uk-position-center-left uk-position-small "
            data-uk-slidenav-previous
            data-uk-slider-item="previous"
          ></a>
          <a
            className="arrow uk-position-center-right uk-position-small "
            data-uk-slidenav-next
            data-uk-slider-item="next"
          ></a>
        </div>
      </section>

      <section
        data-uk-scrollspy="target:.uk-anim; cls: uk-animation-slide-bottom-small; delay: 100; repeat:true;"
        className=" abt-sec mob"
      >
        <p>Title</p>
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          data-uk-slider
        >
          <ul className="uk-grid-small uk-slider-items  uk-grid">
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=21"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=214"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=6"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=216"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=213"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=211"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=201"></Card>
              </div>
            </li>
            <li>
              <div className="uk-anim uk-panel">
                <Card pic="https://picsum.photos/200/300?random=41"></Card>
              </div>
            </li>
          </ul>
          <a
            className="arrow uk-position-center-left uk-position-small "
            data-uk-slidenav-previous
            data-uk-slider-item="previous"
          ></a>
          <a
            className="arrow uk-position-center-right uk-position-small "
            data-uk-slidenav-next
            data-uk-slider-item="next"
          ></a>
        </div>
      </section>
    </div>
  );
}

export default App;
