export type AvatarOptions = {
  name: string;
  backgroundColor: string;
  baseColor: string;
  eyes: string;
  face: string;
  mouth: string;
  sides: string;
  texture: string;
  top: string;
};

export type AvatarURL = string | undefined;

export interface Avatar {
  url: AvatarURL | null;
  options: AvatarOptions | null;
}

export interface OverrideOption {
  name:
    | "name"
    | "backgroundColor"
    | "baseColor"
    | "eyes"
    | "face"
    | "mouth"
    | "sides"
    | "texture"
    | "top";
  value: string;
}

export type TabData = {
  label: string;
  option: string;
};

export interface CustomizationOptions {
  label: string;
  option: string;
  values: string[];
}

export interface AvatarListItem {
  key: string;
  URL: string;
  name: string;
}
export type AvatarList = AvatarListItem[];
