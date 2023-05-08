/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("$lib/server/lucia.js").Auth;
  type UserAttributes = {
    username: string;
  };
}
