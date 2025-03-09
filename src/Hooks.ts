import { AvatarList } from "./Types";

export const useOnUpdateAvatarList = () => {
  try {
    const keys = Object.keys(window.localStorage);
    const aList: AvatarList = [];

    keys.forEach((key) => {
      // was saving accidental avatar only upon reload of page
      if (key.startsWith("avatar-")) {
        const item = window.localStorage.getItem(key);
        if (item) {
          try {
            const avatar = JSON.parse(item);
            // Validate avatar object
            if (avatar.URL && avatar.name) {
              avatar.key = key;
              aList.push(avatar);
            }
          } catch (error) {
            console.error(`Failed to parse avatar with key ${key}:`, error);
          }
        }
      }
    });

    return aList;
  } catch (error) {
    console.error("Failed to get avatar list:", error);
    return [];
  }
};
