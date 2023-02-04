import "./HomePage.scss";
import videoBackground from "../../assets/videos/video-background.mp4";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* INTRODUCTION */}
      <div className="home-page__intro">
        <video
          className="home-page__video"
          src={videoBackground}
          muted
          loop
          autoPlay
        ></video>
        <div className="home-page__content">
          <h1 className="home-page__heading">Hi! I am Simon Tran</h1>
          <p className="home-page__text">
            I am a Full-stack developer who codes and fixes bugs as same as a
            doctor treats patients dedicatedly.
          </p>
          <ButtonComponent btnClassName="btn" btnContent="Projects" />
        </div>
      </div>
      {/* ABOUT */}
    </div>
  );
}
