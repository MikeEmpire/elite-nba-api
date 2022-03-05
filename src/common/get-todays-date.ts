export default (dateToUse?: string): string => {
  let today;
  if (dateToUse) {
    today = new Date(dateToUse);
  } else {
    today = new Date();
  }
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}${mm}${dd}`;
};
