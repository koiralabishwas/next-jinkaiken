// types/next-auth.d.ts

import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    studentId: string;
    name: string;
  }

  interface Session {
    user: {
      studentId: string;
      name: string;
      email: string; // Extend other fields if needed
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    studentId: string;
    name: string;
  }
}
