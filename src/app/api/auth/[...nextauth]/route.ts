import connectDatabase from "@/lib/connectDatabase";
import User from "@/model/User";
import githubAuth from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";
const secret= process.env.NEXTAUTH_SECRET;
export const authOptions: NextAuthOptions = {
    secret: secret,
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }: any) {
            await connectDatabase();
            const username = token.name;
            const email = token.email;
            const role = "user";
            const picture = token.picture;
            const userCheck = await User.findOne({ email: email });
            if (userCheck) {
                return {
                    ...token,
                    createdAt: userCheck?.createdAt,
                    updatedAt: userCheck?.updatedAt,
                    picture: userCheck?.picture,
                    email: userCheck?.email,
                    username: userCheck?.username,
                    role: userCheck?.role,
                    _id: userCheck._id,
                };
            } else {
                const newUserCheck = await User.create({
                    username,
                    email,
                    role,
                    picture,
                });
                return {
                    ...token,
                    createdAt: newUserCheck?.createdAt,
                    updatedAt: newUserCheck?.updatedAt,
                    picture: newUserCheck?.picture,
                    email: newUserCheck?.email,
                    username: newUserCheck?.username,
                    role: userCheck?.role,
                    _id: newUserCheck._id,
                };
            }
        },
        async session({ session, token, user }) {
            session.user = token;
            console.log(
                "session_sessino",
                session,
                "session_token",
                token,
                "session_user",
                user
            );

            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
