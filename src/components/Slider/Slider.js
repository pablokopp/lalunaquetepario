import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const Slider = ({ data }) => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [still, setStill] = useState(false);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  useEffect(() => {
    if (!still) {
      let slider = setInterval(() => {
        setIndex(checkNumber(index + 1));
      }, 5000);

      return () => clearInterval(slider);
    }
  }, [index, still]);

  return (
    <section className="section">
      <div
        className="section-center"
        onMouseEnter={() => setStill(true)}
        onMouseLeave={() => setStill(false)}
      >
        {console.log(data)}
        {people.map((person, personIndex) => {
          const { id, image, name } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setIndex(checkNumber(index - 1))}
        ></button>
        <button
          className="next"
          onClick={() => setIndex(checkNumber(index + 1))}
        ></button>
      </div>
    </section>
  );
};

export default Slider;
