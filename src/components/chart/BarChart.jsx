import React from "react";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'Audience Age',
        align: 'left',
    },
    chart: {
        // distance between the chart and the container
        marginTop: -200,
        spacingBottom: 155,
        type: 'bar',
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        margin: [0, 0, 0, 0],
    },
    plotOptions: {
        bar: {
            stacking: 'percent',
        },
        series: {
            pointWidth: 10,
            borderRadius: 5,
            gapSize: 0,
            borderWidth: 0,
            groupPadding: 0.1,
            pointPadding: 0,
            align: 'left',
        }
        
    },
    // display percentage in the series
    series: [{
        align: 'left',
        name: '< 15 years old' ,
        data: [107],
    }, {
        name: '15-24 years old',
        data: [133],
        align: 'left',
    }, {
        name: '25-34 years old',
        data: [1052],
        align: 'left',
    },
    {
        name: '35-44 years old',
        data: [1052],
        align: 'left',
    }],
    xAxis: {
        visible: false,
    },
    yAxis: {
        visible: false,
        margin: 0,
        
    },
    
    // [{
    //     name: 'Gender',
    //     colorByPoint: true,
    //     innerSize: '65%',
    //     data: [{
    //         name: 'Male',
    //         y: 33.3333333333
    //     }, {
    //         name: 'famele' ,
    //         y: 33.3333333333

    //     }, {
    //         name: 'Other',
    //         y: 33.3333333333

    //     }],
    // }]
}


const BarChart = () => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default BarChart