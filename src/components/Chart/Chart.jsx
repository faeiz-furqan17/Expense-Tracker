import React from "react";
import { Line } from "@ant-design/charts";
import { Height } from "@mui/icons-material";

function Chart({ expensedata }) {
  const config = {
    data: expensedata,
    xField: "date", // These should be the field names as strings
    yField: "amount", // These should be the field names as strings
    point: {
      size: 1,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [{ type: "marker-active" }],
  };

  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "100px" }}>
      <Line {...config} />;
    </div>
  );
}

export default Chart;
