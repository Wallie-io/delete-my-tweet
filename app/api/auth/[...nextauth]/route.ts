import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";

if (!process.env.TWITTER_CLIENT_ID) throw new Error("Missing env TWITTER_CLIENT_ID")
if (!process.env.TWITTER_CLIENT_SECRET) throw new Error("Missing env TWITTER_CLIENT_SECRET")

const authOptions = {  // Configure one or more authentication providers
    providers: [
        TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: "2.0", // opt-in to Twitter OAuth 2.0
      }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
