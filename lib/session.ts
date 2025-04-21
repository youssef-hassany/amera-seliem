import { SignJWT } from "jose";

export async function generateJWT(payload: {
  userId: string;
  email: string;
  username: string;
}) {
  // Make sure to set a JWT_SECRET in your .env file
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const secretKey = new TextEncoder().encode(JWT_SECRET);

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d") // Token expires in 7 days
    .sign(secretKey);

  return token;
}
