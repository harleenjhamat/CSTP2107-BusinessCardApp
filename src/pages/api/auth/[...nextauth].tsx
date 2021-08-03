/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 *    This file we use for User's Log in Google is a provider
 */

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL, 

  // session: {
  //   jwt: true,
  // }
});
