import React from 'react'

import './statuscard.css'

function PercentageChange(props) {
    const { text, trend } = props;
  
    const percentageMatch = text.match(/\d+\.\d+%|\d+%|\d+/);
    const percentage = percentageMatch ? percentageMatch[0] : '';
  
    const textStyle = {
      color: trend === 'increase' ? 'green' : trend === 'decrease' ? 'red' : 'inherit',
    };
  
    const textParts = text.split(percentage);
  
    return (
      <span>
        {textParts[0]} <span style={textStyle}>{percentage}</span> {textParts[1]}
      </span>
    );
  }

  
const StatusCard = props => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
            <span>{props.title}</span>
            <h4>{props.count}</h4>
            <PercentageChange text={props.text} trend={props.trend}/>
            </div>
        </div>
    )
}

export default StatusCard
