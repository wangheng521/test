import React,{useEffect} from 'react'
import * as echarts from 'echarts';

export default function Test3() {

// 基于准备好的dom，初始化echarts实例
useEffect(()=> {
    var myChart = echarts.init(document.getElementById('main'));

    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };








    myChart.setOption(option);
}, [])
// 绘制图表

  return (
    <div id='main' style={{width: 600, height: 600}}>Test3</div>
  )
}
