export default (url, options) => {
  const defaultOptions = Object.assign(
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": document.querySelector("meta[name=csrf-token]").content,
      },
    },
    options,
  );
  return fetch(url, defaultOptions).then(res => res.json());
};
