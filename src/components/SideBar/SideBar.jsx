import "./SideBar.scss";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon";
import GithubIcon from "../GithubIcon/GithubIcon";
import MailIcon from "../MailIcon/MailIcon";

export default function SideBar() {
  return (
    <div className="side-bar">
      <LinkedinIcon linkedinIconClassname="linkedin-icon--side-bar" />
      <GithubIcon githubIconClassname="github-icon--side-bar" />
      <MailIcon mailIconClassname="mail-icon--side-bar" />
    </div>
  );
}
