import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

export default class TideChart extends Component {
  render() {
    // let tide =[]; 
    // const tidedata = this.props.data.map(daydata => tide.push(daydata.tide));

    let tide =[]; 
    this.props.data.map(daydata => {
      return tide.push(daydata.tide)
      
    })

    const data = {
        labels: ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', 
        '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12p'],
        datasets: [
          {
            label: 'Tide',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1.5,
            pointHitRadius: 10,
            data: tide
          }
        ], 
      };

      var options = {
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
          text: 'TIDE (ft.)'
      }
    }
      
    return (
      <div className="chart">
        <Line data={data} options={options}/>
      </div>
    )
  }
}
