import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart = (props) => {
  const labelValueArr = props.dataPoints.map((item) => item.Value);
  const maxValue = Math.max(...labelValueArr);
  console.log(maxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.Value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
