import "./styles/App.css";
import AvatarPreview from "./components/AvatarPreview";
import OptionsPicker from "./components/OptionsPicker";
import ColorPicker from "./components/UI/ColorPicker";
import TextInput from "./components/UI/TextInput";
import { AvatarContext, AvatarListContext } from "./context";
import { alphabetizeAvatars } from "./Services";
import RobotListItem from "./components/RobotListItem";
import SaveButton from "./components/UI/SaveButton";
import useAvatarState from "./useAvatarState";

function App() {
  const {
    avatarOptions,
    setAvatarOptions,
    avatarList,
    updateName,
    saveAvatar,
    deleteAvatar,
  } = useAvatarState();
// Next Steps: Self-contain context providers, maybe wrap them. useRef for the name.  
  return (
    <div className="app_container">
      <AvatarContext.Provider value={{ avatarOptions, setAvatarOptions, saveAvatar }}>
        <AvatarListContext.Provider value={{ avatarList, deleteAvatar }}>
          <div className="main">
            <div className="avatar_creator">
              <SaveButton
                disabled={avatarOptions?.name === "" ? true : false}
              >
                +
              </SaveButton>

              <AvatarPreview />
              <div className="row">
                <TextInput
                  label=""
                  value={avatarOptions?.name || ""}
                  name="avatar_name"
                  placeholder="Name Me!"
                  // could also just access via context
                  handleOnChange={updateName}
                />
              </div>
              <div className="row">
                <ColorPicker
                  label="Color"
                  defaultColor={`#${avatarOptions?.baseColor}`}
                  optionKey="baseColor"
                />
                <ColorPicker
                  label="Background"
                  defaultColor={`#${avatarOptions?.backgroundColor}`}
                  optionKey="backgroundColor"
                />
              </div>
              <OptionsPicker />
            </div>
            <div className="avatar_list">
              <ul>
                {avatarList &&
                  alphabetizeAvatars(avatarList).map((avatar) => {
                    return (
                      <RobotListItem
                        key={avatar.key}
                        keyName={avatar.key}
                        name={avatar.name}
                        url={avatar.URL}
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
        </AvatarListContext.Provider>
      </AvatarContext.Provider>
    </div>
  );
}

export default App;
