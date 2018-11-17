import _fetch from "./fetch";

export const fetchUserSignInData = currentUserId => {
  return _fetch(`/api/users/${currentUserId}`);
};
