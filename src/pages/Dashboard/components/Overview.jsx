import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { month: 'June', population: 10 },
  { month: 'July', population: 3.018 },
  { month: 'August', population: 3.682 },
  { month: 'September', population: 4.440 },
  { month: 'October', population: 5.310 },
  { month: 'November', population: 6.127 },
  { month: 'December', population: 6.930 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={100} />

          <BarSeries
            valueField="population"
            argumentField="month"
          />
          <Title text="Transaction Overview" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
