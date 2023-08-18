import Profile from "../models/profile.model.js";
export const getProfiles = async ({ user: { id } }, res) => {
  try {
    const profiles = await Profile.find({ user: id }).populate("user");
    if (!profiles) res.json({});

    res.json(profiles);
  } catch (error) {
    return res.status(404);
  }
};

export const getProfile = async (
  { params: { id }, user: { id: userID } },
  res
) => {
  try {
    const profile = await Profile.findOne({
      _id: id,
      user: userID,
    }).populate("user");
    if (!profile.user) return res.status(404).json({ message: "Unauthorized" });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    return res.status(404);
  }
};

export const createProfile = async (
  { body: { profileName, date }, user: { id } },
  res
) => {
  try {
    const newProfile = new Profile({ profileName, date, user: id });
    console.log(id);
    const savedProfile = await newProfile.save();
    res.json(savedProfile);
  } catch (error) {
    return res.status(404);
  }
};

export const updateProfile = async (
  { body: { profileName, date }, params: { id } },
  res
) => {
  try {
    const updatedProfile = { profileName, date: date || new Date() };
    const profile = await Profile.findByIdAndUpdate(id, updatedProfile, {
      new: true,
    });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json({ message: "Profile updated succesfully", profile });
  } catch (error) {
    return res.status(404);
  }
};

export const deleteProfile = async ({ params: { id } }, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json({
      message: "Profile deleted succesfully",
      profileDeleted: profile,
    });
  } catch (error) {
    return res.status(404);
  }
};
