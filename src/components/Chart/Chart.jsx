const Chart = props => {
    // console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(dataPointValues); 
    // [0, 0, 0, 0, 0, 0, 0, 94.12, 0, 0, 0, 130]
    const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum);
    return (
        <h1>Hello</h1>
    );
}

export default Chart;