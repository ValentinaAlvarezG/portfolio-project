export const getNumberOfYears = (finalDate: string, initialDate: string) => {
  const start = new Date(initialDate);
  const end = new Date(finalDate);

  const diffInMilliseconds = end.getTime() - start.getTime();

  const numberOfYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  return numberOfYears;
};
