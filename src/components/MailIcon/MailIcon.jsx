import "./MailIcon.scss";
import mailIcon from "../../assets/icons/mail.png";

export default function MailIcon({ mailIconClassname }) {
  return <img className={mailIconClassname} src={mailIcon} alt="mail-icon" />;
}
