import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from'react-apexcharts';




class  Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          zoom: {
            enabled: false,
          },
          height: 250,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        colors: ["rgba(34,193,195,1)"  , "rgba(63,94,251,1)"]
      },


    };
  
  }



  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
    );
  }
}

export default Stats;












