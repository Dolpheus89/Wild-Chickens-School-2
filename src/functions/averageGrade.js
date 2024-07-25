export const calculateAverage = (grades) => {
  if (!Array.isArray(grades) || grades.length === 0) return 0;

  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i].grade;
  }

  return total / grades.length;
};
