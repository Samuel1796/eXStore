import Ticker from 'framer-motion-ticker';
import { useState } from 'react';
import React from 'react';
import styles from '../../styles/styles.module.css'
import { tickerData } from '../../data/Ticker';

const Tickerr = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setIsPlaying(false);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
    setHoveredIndex(null);
  };

  return (
    <div className=" mt-32">
      <h1 className={styles.topperG}>Movie Genres</h1>
      <Ticker
        duration={20}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {tickerData.map((item, index) => (
          <div
            className={styles.cards}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.image}
              alt={item.heading}
              className={`${styles.cardImage} ${hoveredIndex === index ? styles.zoomedImage : ''}`}
            />
            {hoveredIndex === index && (
              <div className={styles.overlay}>
                <h1>{tickerData[index].heading}</h1>
              </div>
            )}
          </div>
        ))}
      </Ticker>
    </div>
  );
}

export default Tickerr;
