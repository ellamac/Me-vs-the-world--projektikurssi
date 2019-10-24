import React from 'react';

import { VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip } from 'victory';

//Custom label
class CustomLabel extends React.Component {
  render() {
    return (
      <VictoryTooltip
        {...this.props}
        style={{ fill: 'grey' }} //text color black
        x={225} //placement in the page
        y={350} //placement in the page
        orientation='top' //where on the x,y -coordinate it will be rendered to
        pointerLength={0} //no pointer
        cornerRadius={0} //sharp corners
        flyoutWidth={400} //rectangle width
        flyoutHeight={50} //rectangle height
        flyoutStyle={{ fill: 'white' }} //rectangle style
      />
    );
  }
}
//Custom label works like a tooltip
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const Results = props => {
  //the real data, now using testData
  const salaries = props.salaries;
  const worldSalaryData = props.worldSalaryData;
  console.log(salaries.salaryValue);

  //Users salary
  const salaryFromInput = props.userSalary;
  //mockup data for the time being
  let testData = [
    { x: 'World', y: 0 },
    { x: 'You', y: 0 },
    { x: 'Yourcountry', y: 0 }
  ];

  if (salaries && worldSalaryData) {
    console.log(
      'Average salary of selected coutry (first not-null-year): ' +
        salaries.salaryValue.value
    );
    if (!worldSalaryData.worldSalaryAvg.value)
      worldSalaryData.worldSalaryAvg.value = 0;
    testData = [
      { x: 'World', y: worldSalaryData.worldSalaryAvg.value },
      { x: 'You', y: 0 },
      { x: 'Your country', y: salaries.salaryValue.value }
    ];
  }

  //if user has inputet salary it will be used
  if (salaryFromInput) {
    testData[1].y = parseInt(salaryFromInput);
  }

  return (
    <div>
      <VictoryChart
        padding={75}
        /* bars wont overlap with axes */
        domainPadding={50}
        /* bars' animation */
        animate={{ duration: 1000 }}
      >
        <VictoryBar
          /* bar color black */
          style={{ data: { fill: 'black' } }}
          /* data used for bars */
          data={testData}
          /* bars labeled with y */
          labels={({ datum }) => datum.y}
          /* what the labels look like */
          labelComponent={
            /* see CustomLabel */
            <CustomLabel
              /* text customized for each bar */
              text={({ datum }) =>
                datum.x === 'World'
                  ? `In the whole world the average yearly salary is ${Math.round(
                      datum.y
                    )}$`
                  : datum.x === 'You'
                  ? `Your yearly salary is ${Math.round(datum.y)}$`
                  : `In Finland the average yearly salary is ${Math.round(
                      datum.y
                    )}$`
              }
            />
          }
        />

        <VictoryAxis
          dependentAxis
          /* y-axis' line is shown */
        />
        <VictoryAxis
          /* x-axis' line not shown */
          style={{ axis: { stroke: 'none' } }}
        />
      </VictoryChart>
    </div>
  );
};

export default Results;
