import { GSContext, GSStatus } from "@godspeedsystems/core";
import jwt from "jsonwebtoken";

export default async function (ctx: GSContext) {
  const token = ctx.inputs.data.headers.authorization?.split("Bearer ")[1];
  const secret = process.env.JWT_SECRET || "your_default_secret";

  try {
    const payload = jwt.verify(token, secret);
    return new GSStatus(true, 200, undefined, payload); // payload becomes `ctx.inputs.data.user`
  } catch (e) {
    return new GSStatus(false, 401, undefined, "Invalid or expired token");
  }
}
