import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  //token registered using userId and encoded with the .env secret
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  //maxAge measured in MS,
  //httpOnly prevents cross-site scripting attacks,
  //sameSite strict prevents cross-site request forgery attacks
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};
