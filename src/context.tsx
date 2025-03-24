import { createContext } from "react";
import { defaultRobot } from "./Services";
import {
  AvatarContextType,
  AvatarListContextType,
} from "./Types";

export const AvatarContext = createContext<AvatarContextType>({
  avatarOptions: defaultRobot,
  setAvatarOptions: () => {},
  saveAvatar: () => {},
});

export const AvatarListContext = createContext<AvatarListContextType>({
  avatarList: [],
  deleteAvatar: () => {},
});
