import "./FooterComponent.scss";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import { useLocation } from "react-router-dom";

export default function FooterComponent() {
  //GET THE CURRENT PATH
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  if (currentPath !== "/submitted") {
    return (
      <div className="site-footer">
        <div className="site-footer__container">
          <div className="site-footer__big-text">
            <p className="site-footer__text site-footer__main-text">
              Simon Tran
            </p>
            <p className="site-footer__text site-footer__description">
              A doctor and blockchain enthusiast who loves optimizing codes to
              make them more concise and has the goal of bringing high-usability
              websites to users.
            </p>
          </div>
          <div className="site-footer__big-text">
            <p className="site-footer__text site-footer__main-text">Social</p>
            <div className="site-footer__icons">
              <a
                href="https://www.linkedin.com/in/simon-tran1501/"
                target="_blanket"
              >
                <LinkedinIcon linkedinIconClassname="linkedin-icon" />
              </a>
              <a href="https://github.com/pingpongdoctor" target="_blanket">
                <GithubIcon githubIconClassname="github-icon__container" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
