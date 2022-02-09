export default (query: string): string =>
  query
    .trim()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
