import React from 'react';
import './Descriptions.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdCompress } from 'react-icons/md';
import { BiSmile } from 'react-icons/bi';
import { BsWind } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';

const Descriptions = ({ weather, units }) => {
  
  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: weather.temp_min.toFixed(),
      units: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: weather.temp_max.toFixed(),
      units: tempUnit,
    },
    {
      id: 3,
      icon: <BiSmile />,
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      units: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: weather.pressure,
      units: 'hpa',
    },
    {
      id: 5,
      icon: <WiHumidity />,
      title: 'humidity',
      data: weather.humidity,
      units: '%',
    },
    {
      id: 6,
      icon: <BsWind />,
      title: 'wind speed',
      data: weather.speed.toFixed(),
      units: windUnit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="description__card-icon">
            {card.icon}
            <small>{card.title}</small>
          </div>
          <h2>{`${card.data}${card.units}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
