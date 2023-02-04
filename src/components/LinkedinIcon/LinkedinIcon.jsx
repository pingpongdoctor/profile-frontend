import "./LinkedinIcon.scss";
import linkedinIcon from "../../assets/icons/linkedin.png";

export default function LinkedinIcon({ linkedinIconClassname }) {
  return (
    <img
      className={linkedinIconClassname}
      src={linkedinIcon}
      alt="linkedin-icon"
    />
  );
}
