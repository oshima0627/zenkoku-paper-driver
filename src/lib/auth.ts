import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "メールアドレス", type: "email" },
        password: { label: "パスワード", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) return null;

        // DBからユーザーを検索
        try {
          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (user && user.password === password) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          }
        } catch {
          // DB接続失敗時は環境変数フォールバック
          const adminEmail = process.env.ADMIN_EMAIL;
          const adminPassword = process.env.ADMIN_PASSWORD;

          if (email === adminEmail && password === adminPassword) {
            return { id: "1", name: "管理者", email: adminEmail };
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnLogin = nextUrl.pathname === "/admin/login";

      if (isOnAdmin && !isOnLogin && !isLoggedIn) {
        return Response.redirect(new URL("/admin/login", nextUrl));
      }
      return true;
    },
  },
});
