export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const sortByHigh = (sortArray = []) => {
  return sortArray.sort((a, b) => b.price.total.amount - a.price.total.amount);
};
export const sortByLow = (sortArray = []) => {
  return sortArray.sort((a, b) => a.price.total.amount - b.price.total.amount);
};
export const filterByNumerOfAdults = (arrayToFilter = [], filterNumber) => {
  return arrayToFilter.filter((f) => f.price.stay.adults >= filterNumber);
};
export const sortAscByNumerOfStars = (sortArray = []) => {
  return sortArray.sort((a, b) => a.rating.value - b.rating.value);
};
export const sortDescByNumerOfStars = (sortArray = []) =>
  sortArray.sort((a, b) => b.rating.value - a.rating.value);

export const filterByText = (sortArray = [], text) => {
  return sortArray.filter((f) => {
    const name = f.name.toLowerCase() || '';
    const locations = [
      f.location.city.toLowerCase(),
      f.location.country.toLowerCase(),
    ];
    const inclusions = f.inclusions.map((m) => m.toLowerCase());
    debugger;
    const checkForName = name.includes(text);
    const checkForLocations = locations.some((s) => s.includes(text));
    const checkForInclusions = inclusions.some((s) => s.includes(text));
    return checkForName || checkForLocations || checkForInclusions;
  });
};
