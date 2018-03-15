export const fetchUsers = query => {
  return $.ajax({
    url: "api/searches",
    method: "POST",
    data: { search: { query } }
  });
};
