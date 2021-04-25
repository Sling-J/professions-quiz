import React from 'react';

import { LikeOutlined, FileDoneOutlined, TeamOutlined } from '@ant-design/icons'
import { Button } from "antd";

import Navigation from "../../components/navigation/Navigation";
import laptopImg from '../../assets/images/laptop.jpg'

const Home = () => {
  return (
    <main>
      <header className='home-header'>
        <div className='wrapper'>
          <Navigation/>

          <div className='home-header__content'>
            <h1 className="home-header-content__title">
              grothix
            </h1>

            <p className="home-header-content__desc">
              Первый шаг в успешное будущее
            </p>

            <button className='home-header-content__button'>
              Пройти тест
            </button>
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

      <section className="home-features">
        <div className="wrapper">
          <div className="home-features-content">
            <h2 className="home-features-content__title">
              С нами
            </h2>

            <p className="home-features-content__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut delectus
              dolorum esse illo iste suscipit tempore temporibus voluptates. A accusamus ad eius eos est libero quos.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut delectus
              dolorum esse illo iste suscipit tempore temporibus voluptates. A accusamus ad eius eos est libero quos.
            </p>
          </div>

          <div className='home-features-list flex justify-sb'>
            <div className="home-features-list__item">
              <LikeOutlined className='home-features-list-item__icon'/>

              <p className="home-features-list-item__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut
              </p>
            </div>

            <div className="home-features-list__item">
              <FileDoneOutlined className='home-features-list-item__icon'/>

              <p className="home-features-list-item__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut
              </p>
            </div>

            <div className="home-features-list__item">
              <TeamOutlined className='home-features-list-item__icon'/>

              <p className="home-features-list-item__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, architecto aut
              </p>
            </div>
          </div>

          <div className="home-features-button">
            <Button type='primary' size='large'>
              Пройти тест
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;