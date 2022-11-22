import icn1 from '../../assets/images/icn1.png'
import icn2 from '../../assets/images/icn2.png'
import icn3 from '../../assets/images/icn3.png'
import React, { useState } from "react";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import Tab from "../tab/Tab";

const tabContent = [
    {
        title: "Daily",
    },
    {
        title: "Weekly",
    },
    {
        title: "Monthly",
    },
];

const options = {
    title: {
        text: null
    },

    series: [
        // make the 3 series with random data and different colors
        {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            color: '#FF0000'
        },
        {
            data: [10, 9, 8, 10, 6, 5, 4, 3, 2, 1],
            color: '#00FF00'
        },
        {
            data: [19, 10, 2, 9, 7, 8, 4, 7, 10, 6],
            color: '#0000FF'
        }

    ],
    chart: {
        type: 'line',
        backgroundColor: '#fff',
        height: 292,
        style: {
            fontFamily: 'Poppins',
            color: '#fff',
            padding: '3px',
            marginBottom: '14px'
        },


    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    },
    legend: {
        enabled: false,
        layout: 'horizontal',
        verticalAlign: 'top',
        align: 'left',
        itemStyle: {
            color: '#1B2B65',
            backgroundColor: '#fff',
            fontWeight: 'bold',
            fontSize: '24px',
        },
        margin: 24,

    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1


        }
    },
    toolip: {
        headerFormat: '<span style="font-size:40px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} USD</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

}

const LineChart = () =>
    <div className='flex flex-col'>
        <div className='mx-auto w-[96%] mt-7 mb-3 flex justify-between'>
            <div className='flex gap-14'>
                <div className='flex gap-3'>
                    <img src={icn1} alt="" />
                    <div>
                        <h2 className='font-medium text-base text-[#A9ABB0]'>Total Reach</h2>
                        <h1 className='text-4xl font-semibold '>150K</h1>
                    </div>
                </div>
                <div className='flex  gap-4'>
                    <img src={icn2} alt="" />
                    <div>
                        <h2 className='font-medium text-base text-[#A9ABB0]'>Total paid Reach</h2>
                        <h1 className='text-4xl font-semibold '>150K</h1>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={icn3} alt="" />
                    <div>
                        <h2 className='font-medium text-base text-[#A9ABB0]'>Total organic Reach</h2>
                        <h1 className='text-4xl font-semibold '>150K</h1>
                    </div>
                </div>
            </div>
            <div>
                <>
                    <div className="">
                        <div className="">
                            <div className="">
                                <Tab>
                                    {tabContent.map((tab, idx) => (
                                        <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                                            {tab.content}
                                        </Tab.TabPane>
                                    ))}
                                </Tab>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>

export default LineChart