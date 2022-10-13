import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { isProduction } from "../shared/config.ts";

export function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (isProduction && req.url.startsWith("http://")) {
    return Response.redirect(req.url.replace("http://", "https://"), 301);
  }
  return ctx.next();
}
