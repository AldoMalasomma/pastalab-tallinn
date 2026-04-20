import { defineMiddleware } from "astro:middleware";
import { defaultLang, getLocalizedPath } from "./i18n/ui";
import { legacyLegalRoutes } from "./data/compliance";

const legalRedirects = Object.fromEntries(
  legacyLegalRoutes.map((route) => {
    const slug = route.replace(/^\//, "").replace(/\/$/, "");
    return [route.replace(/\/$/, ""), getLocalizedPath(defaultLang, slug)];
  }),
);

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname.replace(/\/$/, "") || "/";

  if (pathname === "/") {
    const target = new URL(getLocalizedPath(defaultLang), context.url);
    target.search = context.url.search;

    return Response.redirect(target, 302);
  }

  const target = legalRedirects[pathname];

  if (target) {
    return Response.redirect(new URL(target, context.url), 302);
  }

  return next();
});
