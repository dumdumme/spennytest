const dateFormatter = (utcStamp) => {
  const dateObj = new Date(Number(utcStamp));
  const date = dateObj.getDate();
  const day = dateObj.toLocaleDateString('default', { weekday: 'long' });
  const month = dateObj.toLocaleDateString('default', { month: 'long' });
  return `${date} ${day} ${month}`;
};

export default dateFormatter;
