export const parseNextPage =  (url, dispatch, nextFunction) => {
  try {
    if (url) {
      const objURL = typeof (url) === "string" ? new URL(url) : null;
      const searchParams = objURL.searchParams;
      const urlParams = new URLSearchParams(searchParams);
      const getNumberPage = urlParams.get("page");
      const numberPage = +getNumberPage;
      console.log({ numberPage });
      return numberPage || 1
    }
  } catch (err) {
    throw err;
  }
};
