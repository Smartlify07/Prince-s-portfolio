/**
 * Anchor for the rolling registration window. The visible timer counts down
 * to it, then restarts a fresh `REGISTRATION_WINDOW_HOURS` window from this
 * same moment — it never stays parked at 00:00:00.
 */
export const REGISTRATION_DEADLINE = '2026-11-10T10:12:03+01:00';

/** Length of the registration window, in hours. */
export const REGISTRATION_WINDOW_HOURS = 12;

/** Where every "Register Now" CTA points — Paystack checkout. */
export const REGISTRATION_URL = 'https://paystack.shop/pay/princeugboga';

/** Price shown on the landing page. Paystack's product price must match. */
export const COURSE_PRICE = '30,000';

/**
 * Hero preview, sourced from the client's Google Drive upload
 * (drive file 1Zb2ddtlt-r5CwaaZHlCURKsPRR1VygMS). Drive serves it with
 * Content-Disposition: attachment, which browsers block with ORB inside a
 * <video>, so the file is self-hosted here instead.
 */
export const COURSE_HERO_VIDEO_SRC = '/assets/videos/course-hero.mp4';
