import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

export default class WindChart extends Component {
  render() {

    let wind =[];
    const tidedata = this.props.data.map(daydata => {
      wind.push(daydata.speed_kts)
    })

    const data = {
        labels: ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', 
        '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12p'],
        datasets: [
          {
            label: 'WIND',
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1.5,
            pointHitRadius: 10,
            data: wind
          }
        ], 
      };

      var options = {
        animation: {
          easing: 'easeInOutBounce'
          
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
              gridLines: {
                  display: false
              }
          }],
        },
        legend: {
            display: false
         },
         title: {
          display: true,
          text: 'WIND'
      },
      showLines: false
    }
      
    return (
      <div className="chartdata">
        <Line data={data} height={250} width={500} options={options}/>
      </div>
    )
  }
}
