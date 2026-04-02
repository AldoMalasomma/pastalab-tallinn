import { defineMiddleware } from "astro:middleware";

const legalRedirects: Record<string, string> = {
  "/privacy-policy": "/en/privacy-policy/",
  "/cookie-policy": "/en/cookie-policy/",
  "/accessibility-statement": "/en/accessibility-statement/",
  "/terms-of-use": "/en/terms-of-use/",
  "/colophon": "/en/colophon/",
};

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname.replace(/\/$/, "") || "/";
  const target = legalRedirects[pathname];

  if (target) {
    return Response.redirect(new URL(target, context.url), 302);
  }

  return next();
});
