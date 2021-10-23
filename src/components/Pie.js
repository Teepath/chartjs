import React, {useEffect, useState} from 'react';
import { saleArrayList } from "../util/api";
import { Pie } from 'react-chartjs-2'
import { useSelector } from "react-redux";


function PieChart() {
    const first = useSelector(({ first }) => first);
    const second = useSelector(({ second }) => second);
    const third = useSelector(({ third }) => third);
    const fourth = useSelector(({ fourth }) => fourth);
    const  [load, setLoad] = useState(false)
    
    console.log("pie", second);
  
  

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Proft for 2014(M)',
                data: first ? saleArrayList(first) : null,
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.8)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
                fill: true,
            },
            {
                label: 'Proft for 2015(M)',
                data: second ? saleArrayList(second) : null,
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
              
                fill: true,
            },
            {
                label: 'Proft for 2016(M)',
                data: third ? saleArrayList(third) : null,
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
              
                fill: true,
            },
            {
                label: 'Proft for 2017(M)',
                data: fourth ? saleArrayList(fourth) : null,
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'


                ],
                backgroundColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(55,98,86,0.2)',
                    'rgba(25,276,86,0.2)',
                    'rgba(125,206,86,0.2)',
                    'rgba(275,26,86,0.2)',
                    'rgba(215,06,96,0.5)',
                    'rgba(185,96,26,0.2)',
                    'rgba(295,296,26,0.3)',
                    'rgba(300,46,46,0.5)',
                    'rgba(175,276,36,0.2)',
                    'rgba(135,136,186,0.4)',
                    'rgba(175,76,146,0.3)'
                ],
               
                fill: true,
             

            }
        ]
    }
    
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Pie Chart for Four(4) years Profits'
            },
            legend: {
                position: 'bottom',
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
        
        maintainAspectRatio: false,

    }

    
    if (load) {
        return (
           
            <Pie data={data} options={options} />
               
        )

    } else {
        return <div> loading...</div>
    }
}

export default PieChart;
