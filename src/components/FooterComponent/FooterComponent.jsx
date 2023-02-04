import "./FooterComponent.scss";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon";
import GithubIcon from "../GithubIcon/GithubIcon";

export default function FooterComponent() {
  return (
    <div className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__big-text">
          <p className="site-footer__text site-footer__main-text">Simon Tran</p>
          <p className="site-footer__text site-footer__description">
            A doctor and blockchain enthusiast who loves optimizing codes to
            make them more concise and has the goal of bringing high-usability
            websites to users.
          </p>
        </div>
        <div className="site-footer__big-text">
          <p className="site-footer__text site-footer__main-text">Social</p>
          <div className="site-footer__icons">
            <LinkedinIcon linkedinIconClassname="linkedin-icon" />
            <GithubIcon githubIconClassname="github-icon__container" />
          </div>
        </div>
      </div>
    </div>
  );
}
