import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { isProduction } from "../shared/config.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (isProduction && req.url.startsWith("http://")) {
    return Response.redirect(req.url.replace("http://", "https://"), 301);
  }
  return await ctx.next();
}
