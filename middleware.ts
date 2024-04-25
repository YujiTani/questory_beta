import { authMiddleware } from "@clerk/nextjs";

// 同系統のURLは、authMiddlewareの外でまとめる
const sqlPath = ["/sql/:id", "/sql/stage/:id"];

export default authMiddleware({
  beforeAuth: (res) => {
    res.headers.append('Access-Control-Allow-Credentials', "true")
    res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
  },


  publicRoutes: ["/", "/quests", ...sqlPath, "active_record/:id", "ruby/:id", ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
