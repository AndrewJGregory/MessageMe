import _fetch from "./fetch";

export const signIn = user => {
  return _fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ user }),
  });
};

export const signUp = user => {
  return _fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ user }),
  });
};

export const signOut = () => {
  return _fetch("/api/session", {
    method: "DELETE",
  });
};
