import React, { useState } from "react";
import { useProfiles } from "../context/ProfilesContext";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Profiles() {
  const { profiles, setActiveProfile } = useProfiles();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="h-[calc(85vh)] w-full flex justify-center items-center gap-20">
        {profiles &&
          profiles.map((profile, i) => (
            <div
              className={`text-white flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-all  ${
                hoveredIndex !== null && hoveredIndex !== i
                  ? "filter blur-sm"
                  : ""
              }`}
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                setActiveProfile(profile._id);
                navigate('/movies')
              }}
            >
              <div className="bg-white rounded-lg w-40 h-40"></div>
              <h1>{profile.profileName}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default Profiles;
