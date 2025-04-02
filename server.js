// express-session

// discussion of session- vs. jwt-based auth, and the passport.authenticate("jwt", {}, () =>{}) flow: https://chatgpt.com/c/67eb8929-1900-8007-86a6-4f40a5b61a32

/*

Express middleware for handling sessions, i.e., parsing Cookie req header, writing Set-Cookie res header, and session data. 

Session data is stored server side and can use express's default session store MemoryStore (dev only -- prone to memory leaks in prod) or a compatible store found here (often connect-redis): https://expressjs.com/en/resources/middleware/session.html#compatible-session-stores

The term "session" implies the use of cookies as auth tokens, in contrast to client-side alternatives like JWTs.

Session store, as implemented in MemoryStore, is an object whose sessions (user data objects) are indexed by a randomly generated sessionId (provided to client on first /login as a cookie, typically with HttpOnly and Secure flags enabled).

Example MemoryStore.sessions:

{
    "8ca21fed-cc2e-4aca-919f-1d05d9a0fa70": { id: bob, email: bob@lob.law, fetish: feet},
    "40e57ca4-b4e4-4bc5-951c-3c668a78dca4": { id: tom, email: tom@lob.law, fetish: waxplay},
    "4318d21a-1bc7-4963-b00e-08f7659066af": { id: foo, email: foo@lob.law, fetish: bdsm}
}

Session auth (retrieve user data from session store, indexed by req-provided sessionId cookie) is argued to be more secure, supposedly trumping the efficiency of JWTs' living entirely client-side. 


*/