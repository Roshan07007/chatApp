import jwt from "jsonwebtoken";

export const genAdminToken = (user, res) => {
  try {
    console.log("hjgwdf");

    const payload = {
      id: user._id,
      role: user.role || "admin",
    };
    const token = jwt.sign(payload, process.env.jwt_secret, {
      expiresIn: "1d",
    });
    console.log(token);
    res.cookie("parleg", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    throw error;
  }
};
