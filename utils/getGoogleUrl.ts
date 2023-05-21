function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    response_type: "code",
    redirect_uri: "http://localhost:4000/api/auth/google/callback",
    client_id: "388709238959-3aot1ea558voloa9m0t8mh18gjc3gg1b.apps.googleusercontent.com",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" ")
  };

  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
