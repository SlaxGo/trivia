import { useLocation } from "react-router-dom";

const ProfileTwo = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <p>Name: {data.name}</p>
    </div>
  );
};

export default ProfileTwo;