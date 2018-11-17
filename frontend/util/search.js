import _fetch from "./fetch";

export const searchUsers = query => {
  return _fetch("/api/searches", {
    method: "POST",
    body: JSON.stringify({ search: { query } }),
  });
};
