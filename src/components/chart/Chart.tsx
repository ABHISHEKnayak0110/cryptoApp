import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface props{
    historicData : any 
    days :number 
    currency : string
}
function ChartLine({historicData , days , currency}:props) {
  return (
    <div>
        <Line
              data={{
                labels: historicData?.map((coin:any) => {
                  let date = new Date(coin?.[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date?.getMinutes()} PM`
                      : `${date.getHours()}:${date?.getMinutes()} AM`;
                  return days === 1 ? time : date?.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData?.map((coin :any) => coin?.[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                   
                
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
  
    </div>
  )
}

export default ChartLine