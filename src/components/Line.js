import React from 'react';
import { saleArrayList } from "../util/api";
import { Line } from 'react-chartjs-2'
import { useSelector } from "react-redux";
import { getSalesData} from "../util/api"


function LineChart({collections}) {
    const result = getSalesData(collections);
 
    const { first_year, second_year, third_year, fourth_year } = result;
   
   
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Profits for 2014(M)',
                data: first_year ? saleArrayList(first_year) : null,
                borderColor: ['rgba(255,206,86,0.2'],
                backgroundColor: ['rgba(255,206,86,0.2'],
                pointBackgroundColor: ['rgba(255,206,86,0.2'],
                pointBorderColor: ['rgba(255,206,86,0.2'],
                fill: false,
                barThickness:14
            },
            {
                label: 'Profits for 2015(M)',
                data: second_year ? saleArrayList(second_year) : null,
                borderColor: ['rgba(54,162,235,0.2'],
                backgroundColor: ['rgba(54,162,235,0.2)'],
                pointBackgroundColor: ['rgba(54,162,235,0.2'],
                pointBorderColor: ['rgba(54,162,235,0.2'],
                fill: false,
                barThickness:14
            },
            {
                label: 'Profits for 2016(M)',
                data: third_year ? saleArrayList(third_year) : null,
                borderColor: ['rgba(154,62,235,0.2'],
                backgroundColor: ['rgba(154,62,235,0.2'],
                pointBackgroundColor: ['rgba(154,62,235,0.2'],
                pointBorderColor: ['rgba(154,62,235,0.2'],
                fill: false,
                barThickness:14
            },
            {
                label: 'Profits for 2017(M)',
                data: fourth_year ? saleArrayList(fourth_year) : null,
                borderColor: ['rgba(294,122,35,0.2'],
                backgroundColor: ['rgba(294,122,35,0.2'],
                pointBackgroundColor: ['rgba(294,122,35,0.2'],
                pointBorderColor: ['rgba(294,122,35,0.2'],
                fill: false,

            }
        ]
    }
    // const options = {
    //         tooltips: {
    //             mode: 'index',
    //             callbacks: {
    //                 label: function (toolTipItem) {
    //                     return ("Profit: $" + toolTipItem.value)
    //                 }
    //             }
          
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
              display: true,
              text: 'Time series for Four(4) years Profits'
            },
          },
        interaction: {
            mode: "index",
            intersect: false,
          },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect:true
        },

        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Profits'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                },
               
            },
        }
    }
       
    
 
        return (
           
                <Line data={data} options={ options}/>
               
          
        )

   
}

export default LineChart;
