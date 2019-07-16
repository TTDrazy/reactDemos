import React, { Component } from "react";
import echarts from 'echarts';
import Div from './Div'

class ChartBar extends Component {
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        //用ref代替id的形式来控制dom，实现复用echart图表
        var myChart = echarts.init(this.chartRef.current);
        myChart.setOption({
            title: { text: 'ECharts 示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        console.log(this.chartRef.current);//证明获取到DIV组件中的div元素了
    } 
    render() {
        
        return (
            <div>
                <Div ref={this.chartRef}></Div>
            </div> 
        )
    }
}
export default ChartBar;