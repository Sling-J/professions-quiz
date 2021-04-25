import React from 'react';

import Navigation from "../../components/navigation/Navigation";
import laptopImg from "../../assets/images/laptop.jpg";

const About = () => {
  return (
    <main className='details'>
      <header className='details-header'>
        <div className="wrapper">
          <Navigation/>

          <div className="details-header-content">
            <h1 className="details-header-content__title">
              О нас
            </h1>
          </div>
        </div>
      </header>

      <section className='home-about'>
        <div className="wrapper">
          <div className="home-about-content flex justify-sb flex-align-center">
            <div className='home-about-content__img'>
              <img src={laptopImg} alt="Laptop"/>
            </div>

            <div className="home-about-content__info">
              <h2 className="home-about-content-info__title">
                О нас
              </h2>

              <p className="home-about-content-info__desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut delectus
                dolorum esse illo iste suscipit tempore temporibus voluptates. A accusamus ad eius eos est libero quos.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut delectus
                dolorum esse illo iste suscipit tempore temporibus voluptates. A accusamus ad eius eos est libero quos.
              </p>

              <button className='home-about-content-info__button'>
                Пройти тест
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;