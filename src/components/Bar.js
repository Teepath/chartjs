import React from 'react';
import { saleArrayList } from "../util/api";
import { Bar } from 'react-chartjs-2'
import { useSelector } from "react-redux";
import { getSalesData} from "../util/api"


function BarChart({collections}) {
    // const first = useSelector(({first}) =>first );
    // const second = useSelector(({second})=> second);
    // const third = useSelector(({third}) => third);
    // const fourth = useSelector(({fourth})=> fourth);
    
    const result = getSalesData(collections);
    console.log("Bar", result)
    const { first_year, second_year, third_year, fourth_year } = result;

    

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Profits for 2014(M)',
                data: first_year?saleArrayList(first_year):null,
                borderColor: [
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2'
                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2',
                    'rgba(255,206,86,0.2'
                ],
                fill: true,
            },
            {
                label: 'Profits for 2015(M)',
                data: second_year?saleArrayList(second_year):null,
                borderColor: [
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2'
                
                ],
                backgroundColor: [
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2',
                    'rgba(54,162,235,0.2'
                ],
                 
              
                fill: false,
                 
            },
            {
                label: 'Profits for 2016(M)',
                data: third_year?saleArrayList(third_year):null,
                borderColor: [
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2'
                ],
                backgroundColor: [
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2',
                    'rgba(154,62,235,0.2'
                ],
              
                fill: true,
            },
            {
                label: 'Profits for 2017(M)',
                data: fourth_year?saleArrayList(fourth_year):null,
                borderColor: [
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2'


                ],
                backgroundColor: [
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2',
                    'rgba(294,122,35,0.2'
                ],
               
                fill: true,

            }
        ]
    }


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Bar Chart for Four(4) years Profits'
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
            intersect: true
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
        },

        // layout: {
        //     padding: 20
        // }
    }
    
 
        return (
        
                <Bar data={data} options={options} />
               
        )

   
}

export default BarChart;
