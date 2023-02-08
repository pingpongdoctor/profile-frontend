import "./SideBar.scss";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import MailIcon from "../MailIcon/MailIcon";

export default function SideBar() {
  return (
    <div className="side-bar">
      <a href="https://www.linkedin.com/in/simon-tran1501/" target="_blanket">
        <LinkedinIcon linkedinIconClassname="linkedin-icon--side-bar" />
      </a>
      <a href="https://github.com/pingpongdoctor" target="_blanket">
        <GithubIcon githubIconClassname="github-icon--side-bar" />{" "}
      </a>
      <a href="mailto:thanhnhantran1501@gmail.com" target="_blanket">
        <MailIcon mailIconClassname="mail-icon--side-bar" />
      </a>
    </div>
  );
}
