import { createContext, useContext } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = ProfileContext.Provider;

export const useProfile = () => {
  return useContext(ProfileContext);
};
