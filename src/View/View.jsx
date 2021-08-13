
import React, { useState } from "react";
import PlayArrowOutlined from "@material-ui/icons/PlayArrowOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShareIcon from "@material-ui/icons/Share";
import CreateIcon from "@material-ui/icons/Create";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import GetAppIcon from "@material-ui/icons/GetApp";
import styles from "./styles.module.css";
import Loading from "./loading";
import logo from "../media/logoRed.png";


const ViewMedia = () => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const episodes = [{ image: "https://thispersondoesnotexist.com/image", title: "Mitra BT khayega ki dega?", released: "kal shaam", overview: "Please i can't type anymore bitches" }, { image: "https://thispersondoesnotexist.com/image", title: "Mitra BT khayega ki dega?", released: "kal shaam", overview: "Please i can't type anymore bitches" }]
  return (
    <>
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
      <div>
        <header
          className={styles.banner}
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to right, #0f171e 40%, transparent 100%),url("https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/73acd037942c51bbefeb32ca54421ebf36da27853a02c292008d70148c92c52f._V_SX1080_.jpg")`,
            backdropPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "88vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <div className={styles.container}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "2",
                alignItems: "start",
                marginLeft: "5%",
              }}>
              <p className={styles.media_title}>Richik's Whiskeys</p>
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "space-between",
                  marginTop: "15px",
                  alignItems: "center",
                  color: "#8197a4",
                  fontSize: "15px",
                }}>
                <div>IMDb 6.1</div>
                <div>1 h 42 min</div>
                <div>2020</div>
                <div
                  style={{
                    fontSize: "11px",
                    border: "1px solid #8197a4",
                    fontWeight: "bold",
                    borderRadius: "2px",
                    padding: "3px",
                  }}>
                  X-ray
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    border: "1px solid #8197a4",
                    fontWeight: "bold",
                    borderRadius: "2px",
                    padding: "3px",
                  }}>
                  7+
                </div>
                <SpeakerNotesIcon />
              </div>
              <div
                style={{
                  marginTop: "15px",
                  width: "100%",
                  fontSize: "17px",
                }}>
                {/* {truncate(media?.overview, 200)} */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "60%",
                  justifyContent: "space-between",
                  marginTop: "15px",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}>
                <div
                  // onClick={() => handleClick("TR2")}
                  className={styles.banner_btn_active}>
                  <PlayArrowOutlined
                    fontSize="large"
                    style={{ color: "white" }}
                  />
                  <div>Play</div>
                </div>
                <div
                  //  onClick={() => handleClick("TR2")}
                  className={styles.banner_btn}>
                  <PlayArrowOutlined fontSize="large" />
                  <div>Watch Trailer</div>
                </div>
                <div
                  // onClick={() => handleAdd(media)}
                  className={styles.banner_btn_add}>
                  <div>
                    {true
                      ? "Remove From Watchlist"
                      : "Add to WatchList"}
                  </div>
                </div>
                <div
                  //       onClick={handleClick}
                  className={styles.banner_btn_download}>
                  <GetAppIcon fontSize="large" />
                  <div>Download</div>
                </div>
              </div>
              <div className={styles.crew}>
                <div style={{ color: "#8197a4", fontWeight: 600 }}>
                  Directors
                </div>
                <div style={{ color: "#79b8f3" }}>
                  Zack Snyder
                </div>
                <div style={{ color: "#8197a4", fontWeight: 600 }}>
                  Starring
                </div>
                <div style={{ color: "#79b8f3" }}>
                  War Criminal Gadot, Alcholic Batman, Superman
                </div>
                <div style={{ color: "#8197a4", fontWeight: 600 }}>
                  Genres
                </div>
                <div style={{ color: "#79b8f3" }}>Action</div>
                <div style={{ color: "#8197a4", fontWeight: 600 }}>
                  Subtitles
                </div>
                <div style={{ color: "#79b8f3" }}>English</div>
                <div style={{ color: "#8197a4", fontWeight: 600 }}>
                  Audio languages
                </div>
                <div style={{ color: "#79b8f3" }}>"English</div>
              </div>
            </div>
            <div style={{ flex: "1" }}> {` `} </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
            }}>
            <div
              style={{
                color: "#8197a4",
                fontSize: "15px",
                marginLeft: "5%",
              }}>
              By clicking play,{" "}
              <span style={{ color: "#79b8f3" }}>
                you agree to our Terms of Use.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "5%",
                alignItems: "center",
              }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  color: "white",
                }}>
                <ShareIcon fontSize="large" style={{ color: "white" }} />
                <div style={{ marginLeft: "10px" }}>Share</div>
              </div>
              <div
                //onClick={() => setOpen(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  color: "white",
                  cursor: "pointer",
                }}>
                <CreateIcon fontSize="large" style={{ color: "white" }} />
                <div style={{ marginLeft: "10px" }}>Feedback</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  color: "white",
                }}>
                <HelpOutlineIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
                <div style={{ marginLeft: "10px" }}>Help</div>
              </div>
            </div>
          </div>
        </header>
        <div>{episodes.length > 0 &&
          episodes.map((item) => (
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  width: "93%",
                  height: "auto",
                  margin: "auto",
                  marginTop: "10px",
                  backgroundColor: "#19232C",
                }}>
                <div style={{ flex: "1" }}>
                  <img width="80%" src={item.image} alt="test" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "2",
                    marginLeft: "-50px",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      color: "white",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "15px",
                        color: "white",
                      }}>
                      <div
                        style={{
                          color: "white",
                          backgroundColor: "#0f79af",
                          borderRadius: "50%",
                          height: "50px",
                          width: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <PlayArrowOutlined fontSize="large" />
                      </div>
                      <div
                        style={{ fontSize: "17px", marginLeft: "10px" }}>
                        {item.title}
                      </div>
                    </div>
                    <GetAppIcon
                      fontSize="large"
                      style={{ margin: "10px" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      color: "#8197a4",
                      fontSize: "15px",
                      justifyContent: "space-between",
                      maxWidth: "60%",
                    }}>
                    <div>{item.released}</div>
                    <div>45 min</div>
                    <div
                      style={{
                        fontSize: "11px",
                        border: "1px solid #8197a4",
                        fontWeight: "bold",
                        borderRadius: "2px",
                        padding: "3px",
                      }}>
                      7+
                    </div>
                    <div>English</div>
                    <div>English</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      color: "white",
                      fontSize: "15px",
                    }}>
                    {item.overview}
                  </div>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
    </>
  )


}
export default ViewMedia;