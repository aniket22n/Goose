import { atom } from "recoil";
import { searchResponseType } from "../../zod/zod";

export const searchUser = atom({
  key: "searchUserKey",
  default: "",
});

export const searchResponse = atom<searchResponseType | null>({
  key: "ThisIsSearchResponseKey",
  default: null,
});
