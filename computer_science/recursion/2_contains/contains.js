const contains = function (value, searchValue) {
  if (value === searchValue) return true;

  if (Number.isNaN(value) && Number.isNaN(searchValue)) return true;

  if (value === null || typeof value !== "object") return false;

  const nestedValues = Object.values(value);

  return nestedValues.some((nestedValue) => contains(nestedValue, searchValue));
};

// Do not edit below this line
module.exports = contains;