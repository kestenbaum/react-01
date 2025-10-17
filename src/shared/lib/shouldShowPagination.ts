export const shouldShowPagination = (
  total: number,
  limit: number,
  filterLenght?: number,
) => {
  if (filterLenght !== undefined && filterLenght > 0) {
    return filterLenght >= limit;
  }

  return total >= limit;
};
