import { useState, useEffect, useReducer } from "react";
import { createAvatarListFromStorage } from "./Hooks";
import { generateKey, defaultRobot, buildURL } from "./Services";
import { AvatarList, AvatarListItem } from "./Types";

type AvatarAction =
  | { type: "LOAD"; payload: AvatarList }
  | { type: "ADD"; payload: AvatarListItem }
  | { type: "DELETE"; payload: string };

const useAvatarState = () => {
  const [avatarOptions, setAvatarOptions] = useState(defaultRobot);

  const avatarReducer = (
    state: AvatarList,
    action: AvatarAction
  ) => {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((obj) => obj.key !== action.payload);
      default:
        return state;
    }
  };

  const [avatarList, dispatch] = useReducer(avatarReducer, []);

  // On mount, set avatar list from local storage
  useEffect(() => {
    const storedList = createAvatarListFromStorage();
    dispatch({ type: "LOAD", payload: storedList });
  }, []);

  // after initial mount, avatar list is saved in React State.
  // If avatar list changes, update local storage with new avatar list
  useEffect(() => {
    // window.localStorage.clear(); // caused state update issues on refresh app
    avatarList.forEach((item) => {
      const obj = {
        URL: item.URL,
        name: item.name,
      };
      window.localStorage.setItem(item.key, JSON.stringify(obj));
    });
    setAvatarOptions(defaultRobot);
  }, [avatarList]);

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarOptions((prevOptions) => {
      return { ...prevOptions, name: event.target.value };
    });
  };

  // before we updated local storage, then set new avatar list based on that
  // now we set new avatar list, and then update local storage
  const saveAvatar = () => {
    const newItem: AvatarListItem = {
      key: generateKey(avatarOptions?.name),
      name: avatarOptions?.name,
      URL: buildURL(avatarOptions),
    };
    dispatch({ type: "ADD", payload: newItem });
  };

  const deleteAvatar = (keyName: string) => {
    dispatch({ type: "DELETE", payload: keyName }); // update avatarListState
    // removes from local storage
    try {
      window.localStorage.removeItem(keyName);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    avatarOptions,
    setAvatarOptions,
    avatarList,
    updateName,
    saveAvatar,
    deleteAvatar,
  };
};

export default useAvatarState;
