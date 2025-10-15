export const getVisiblePages = (
  currentPage: number,
  totalPages: number,
  windowSize = 5,
) => {
  const pages: (number | string)[] = [];
  const half = Math.floor(windowSize / 2);

  let start = Math.max(2, currentPage - half);
  let end = Math.min(totalPages - 1, currentPage + half);

  if (currentPage <= half + 1) {
    start = 2;
    end = Math.min(totalPages - 1, windowSize);
  } else if (currentPage + half >= totalPages) {
    start = Math.max(2, totalPages - windowSize + 1);
    end = totalPages - 1;
  }

  pages.push(1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (totalPages > 1) pages.push(totalPages);

  return pages;
};
