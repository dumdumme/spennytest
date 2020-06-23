const monthFormatter = (months) => {
  const formattedMonths = months.map((month, index) => {
    return {
      value: month.charAt(0) + month.slice(1).toLowerCase(),
      highlighted: index === 0,
    };
  });
  return formattedMonths;
};

export default monthFormatter;
