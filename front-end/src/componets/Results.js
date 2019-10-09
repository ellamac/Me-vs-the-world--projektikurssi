import React from "react";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";

class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryLabel {...this.props} />
        <VictoryTooltip
          {...this.props}
          x={200}
          y={250}
          orientation="top"
          pointerLength={0}
          cornerRadius={50}
          flyoutWidth={100}
          text="jtn"
          flyoutHeight={100}
          flyoutStyle={{ fill: "orange" }}
        />
      </g>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

class Results extends React.Component {
  render() {
    const data = [
      { country: "fin", avgSalary: 42000 },
      { country: "swe", avgSalary: 40000 },
      { country: "nor", avgSalary: 80000 },
      { country: "den", avgSalary: 39000 }
    ];
    return (
      <VictoryPie
        style={{ labels: { fill: "white" } }}
        innerRadius={100}
        labelRadius={120}
        labelComponent={<CustomLabel />}
        data={data}
        x="country"
        y="avgSalary"
      />
    );
  }
}

export default Results;
