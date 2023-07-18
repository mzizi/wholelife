import "lucia-auth/polyfill/node";

import lucia from "lucia-auth";
import { web } from "lucia-auth/middleware";

import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const ENV = process.env.NODE_ENV === "PROD" ? "PROD" : "DEV";

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  env: ENV,
  middleware: web(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      username: userData.username,
    };
  },
});
