const chartDataFormatter = (chartData) => {
  const { labels, datasets } = chartData;
  const temp1 = labels.map((label, index) => ({
    x: `0${index}`,
    y: label,
  }));
  const temp2 = temp1.map((item, index) => ({
    ...item,
    dataset0: datasets[0].data[index],
  }));
  return temp2.map((item, index) => ({
    ...item,
    dataset1: datasets[1].data[index],
  }));
};

export default chartDataFormatter;
