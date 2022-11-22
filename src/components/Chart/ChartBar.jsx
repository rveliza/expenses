import './ChartBar.css';

const ChartBar = props => {
    const barFillHeight = '0%';
    if(props.max > 0) {
        barFillHeight = Math.round((props.value / propx.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='cart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='chat-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;