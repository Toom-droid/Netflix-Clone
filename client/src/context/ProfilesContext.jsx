import { createContext, useState, useContext, useEffect } from "react";
import {
  createRequest,
  deleteRequest,
  profileRequest,
  profilesRequest,
  updateRequest,
} from "../api/profiles";
export const ProfilesContext = createContext();

export const useProfiles = () => {
  const context = useContext(ProfilesContext);
  if (!context)
    throw new Error("useProfiles must be used within a ProfilesProvider");
  return context;
};

export const ProfilesProvider = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState(null);

  const [profiles, setProfiles] = useState(null);

  const getProfiles = async () => {
    try {
      const res = await profilesRequest();
      setProfiles(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = async (id) => {
    try {
      const res = await profileRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createProfile = async (profile) => {
    try {
      const res = await createRequest(profile);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProfile = async (profile, id) => {
    try {
      const res = await updateRequest(profile, id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProfile = async (id) => {
    try {
      const res = await deleteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfiles();
  }, []);
  useEffect(() => {
    console.log(activeProfile)
  }, [activeProfile]);

  return (
    <ProfilesContext.Provider
      value={{
        profiles,
        createProfile,
        getProfile,
        updateProfile,
        deleteProfile,
        setActiveProfile,
      }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};
