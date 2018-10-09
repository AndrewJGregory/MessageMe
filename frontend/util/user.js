export const fetchUserSignInData = currentUserId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${currentUserId}`,
  });
};
