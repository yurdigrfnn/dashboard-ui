import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'My stock chart'
    },

    series: [{
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    
    }],
    chart: {
        type: 'line'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010,
            pointInterval: 1
        }
    },
    toolip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} USD</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

  }

const LineChart = () =>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />

export default LineChart