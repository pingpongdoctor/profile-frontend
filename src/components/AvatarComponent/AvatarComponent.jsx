import Avatar from "@mui/material/Avatar";
import "./AvatarComponent.scss";
import profilePic from "../../assets/images/profile-picture.jpg";

export default function AvatarComponent({ width, height }) {
  return (
    <Avatar
      alt="profile-pic"
      src={profilePic}
      sx={{ width: width, height: height }}
    />
  );
}
