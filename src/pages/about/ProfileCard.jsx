import Card from "../../components/reusable/Card.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import ProfileInfo from "./ProfileInfo.jsx";

const ProfileCard = () => {
  return (
    <Card>
      <ProfilePicture />
      <ProfileInfo />
    </Card>
  );
};

export default ProfileCard;
