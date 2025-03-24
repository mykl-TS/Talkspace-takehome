import { useContext } from "react";
import { AvatarListContext } from "./../context";
import "../styles/robotListItem.css";

interface Props {
  keyName: string;
  name: string;
  url: string;
}

const RobotListItem = (props: Props) => {
  const { keyName, name, url } = props;
  const { deleteAvatar } = useContext(AvatarListContext);

  return (
    <>
      <li className="avatar_item_container">
        <span className="item_avatar">
          <img src={url} alt={`robot avatar`} />
        </span>
        <span className="avatar_item_name">{name}</span>
        <button className="avatar_delete" onClick={() => deleteAvatar(keyName)}>
          X
        </button>
      </li>
    </>
  );
};

export default RobotListItem;
