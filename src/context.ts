import { createContext } from "react";
import { AvatarList, AvatarOptions } from "./Types";
import { defaultRobot } from "./Services";

interface AvatarContextType {
  avatarOptions: AvatarOptions;
  setAvatarOptions: React.Dispatch<React.SetStateAction<AvatarOptions>>;
}

interface AvatarListContextType {
  avatarList: AvatarList;
  setAvatarList: React.Dispatch<React.SetStateAction<AvatarList>>;
  loading: boolean;
  error?: string | null;
}

export const AvatarContext = createContext<AvatarContextType>({
  avatarOptions: defaultRobot,
  setAvatarOptions: () => {},
});

export const AvatarURLContext = createContext<string>("");

export const AvatarListContext = createContext<AvatarListContextType>({
  avatarList: [],
  setAvatarList: () => {},
  loading: false,
  error: null,
});
