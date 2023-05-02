import { createTRPCRouter } from "~/server/api/trpc";
import { newsletter } from "~/server/api/routers/newsletter";
import { contact } from "~/server/api/routers/contact";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  newsletter,
  contact
});

// export type definition of API
export type AppRouter = typeof appRouter;
