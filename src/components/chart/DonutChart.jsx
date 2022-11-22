import React, { useState } from "react";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

// highcharts make point in inner circle


const options = {
    colors: ['#01BAF2', '#71BF45', '#FAA74B', '#B37CD2'],
    chart: {
        type: 'pie',
        width: 300,
        height: 300,
        backgroundColor: '#fff',
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: 'Gender',
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: {
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#000000',
                    textOutline: '0px',
                },
                format: '{point.percentage:.0f}%',
            },
            allowPointSelect: true,
            cursor: 'pointer',
            
            showInLegend: true
        }
    },
    series: [{
        name: 'Gender',
        colorByPoint: true,
        innerSize: '65%',
        data: [{
            name: 'Male',
            y: 33.3333333333
        }, {
            name: 'famele' ,
            y: 33.3333333333

        }, {
            name: 'Other',
            y: 33.3333333333

        }],
    }]
}

const DonutChart = () => {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )

}


export default DonutChart