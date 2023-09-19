import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import db from '../../db'

if (!process.env.TWITTER_CLIENT_ID)
    throw new Error('Missing env TWITTER_CLIENT_ID')
if (!process.env.TWITTER_CLIENT_SECRET)
    throw new Error('Missing env TWITTER_CLIENT_SECRET')

const authOptions = {
    // Configure one or more authentication providers
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: '2.0', // opt-in to Twitter OAuth 2.0
            authorization: {
                url: 'https://twitter.com/i/oauth2/authorize',
                params: {
                    scope: 'users.read tweet.read tweet.write offline.access list.read',
                },
            },
        }),
    ],
    callbacks: {
        //@ts-ignore
        async jwt({ token, user, account, profile, isNewUser }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account.refresh_token) {
                db.users.findOneAndUpdate(
                    { _id: user.id },
                    {
                        _id: user.id,
                        twitter_refresh_token: account.refresh_token,
                        twitter_access_token: account.access_token,
                    }
                )
            }
            return token
        },
    },
}
//@ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

/** 
profile:  {
    data: {
      id: '1453538337982074881',
      name: 'GPT-Jake',
      username: 'computervillain',
      profile_image_url: 'https://pbs.twimg.com/profile_images/1686382741317947392/uwzbvXnL_normal.jpg'
    }
  }
  user:  {
    id: '1453538337982074881',
    name: 'GPT-Jake',
    email: undefined,
    image: 'https://pbs.twimg.com/profile_images/1686382741317947392/uwzbvXnL_normal.jpg'
  }
  account:  {
    provider: 'twitter',
    type: 'oauth',
    providerAccountId: '1453538337982074881',
    token_type: 'bearer',
    expires_at: 1693881027,
    access_token: 'R0w3UlVUamRFd3d5TVhrRW5pZVNDSFBZb2VCWnQtNWRZdmMwMlRhWUxpamxJOjE2OTM4NzM4Mjc1Mjc6MTowOmF0OjE',
    scope: 'offline.access list.read tweet.write users.read tweet.read',
    refresh_token: 'Yy1XbHhlZnphdG5PTTBlUlpXMUVKWnpzTlNXcGxmNG1YblVKWFlkdktfOFNwOjE2OTM4NzM4Mjc1Mjc6MTowOnJ0OjE'
  }
  token:  {
    name: 'GPT-Jake',
    picture: 'https://pbs.twimg.com/profile_images/1686382741317947392/uwzbvXnL_normal.jpg',
    sub: '1453538337982074881',
    iat: 1693873827,
    exp: 1696465827,
    jti: 'a55e800d-85e2-480b-b87d-9897c3293ce7'
  }*/
