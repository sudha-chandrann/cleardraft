import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
    if (!result) {
      return { success: false, message: "User not found.", user: null };
    }
    return { success: true, message: "User found successfully.", user: result };
  },
});



export const createUser = mutation({
  args: { email: v.string(), name: v.string(), image: v.string() },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db.query("user")
    .filter((q)=>q.eq(q.field("email"),args.email)).first();

    if (existingUser) {
      return { success: false, message: "User with this email already exists.", user: existingUser };
    }
    const newUser = await ctx.db.insert("user", args);
    return { success: true, message: "User created successfully.", user: newUser };
  },
});
