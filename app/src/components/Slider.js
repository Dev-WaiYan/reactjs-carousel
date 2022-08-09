import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Slider.module.css";

const imgs = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
];

function Slider() {
  const [perSlideMovedCount, setPerSlideMovedCount] = useState(1);
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [unit, setUnit] = useState("px");

  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const position = (currentSlidePosition + width) * perSlideMovedCount;
      containerRef.current.scrollLeft = position;
      setCurrentSlidePosition(position);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlidePosition]);

  return (
    <div className={styles.container} ref={containerRef}>
      {imgs.map((img) => (
        <div
          key={img}
          className={styles.contentContainer}
          style={{ width: width + unit, height: height + unit }}
        >
          <img
            src={require(`../images/${img}`)}
            style={{ width: width + unit, height: height + unit }}
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
