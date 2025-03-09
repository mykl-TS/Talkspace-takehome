import { AvatarList } from "./Types";

export const useOnUpdateAvatarList = () => {
  try {
    const keys = Object.keys(window.localStorage);
    const aList: AvatarList = [];
    keys.forEach((key) => {
      let item =
        window.localStorage.getItem(key) ||
        "{URL:'undefined', name: 'undefined'}";
      const avatar = JSON.parse(item);
      avatar.key = key;
      aList.push(avatar);
    });
    return aList;
  } catch (error) {
    console.log(error);
    return [];
  }
};
