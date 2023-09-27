import jwt from 'jsonwebtoken'

export async function generateAuthToken(user) {
  const jwtSecretKey = process.env.JWT_SECRET;
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    jwtSecretKey
  );
  return token;
}