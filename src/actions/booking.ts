import { defineAction } from "astro:actions";
import { randomUUID } from "node:crypto";
import { bookingSchema, type BookingSubmission } from "../data/booking";
import type { Locale } from "../i18n/ui";

type BookingRequestResult = {
  reference: string;
  locale: Locale;
  receivedAt: string;
  summary: BookingSubmission;
};

function resolveLocale(value: unknown): Locale {
  return value === "en" || value === "et" || value === "ru" ? value : "it";
}

export const bookingRequest = defineAction({
  accept: "form",
  input: bookingSchema,
  handler: async (input, context): Promise<BookingRequestResult> => {
    const locale = resolveLocale(context.currentLocale);

    return {
      reference: `PLSF-${randomUUID().slice(0, 8).toUpperCase()}`,
      locale,
      receivedAt: new Date().toISOString(),
      summary: input,
    };
  },
});

export type { BookingRequestResult };
