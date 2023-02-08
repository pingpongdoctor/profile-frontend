import "./GithubIcon.scss";
import githubIcon from "../../assets/icons/github.png";

export default function GithubIcon({ githubIconClassname }) {
  return (
    <div className="github-icon">
      <img className={githubIconClassname} src={githubIcon} alt="github-icon" />
    </div>
  );
}
