import React from 'react';

import Navigation from "../../components/navigation/Navigation";

import { LikeOutlined, FileDoneOutlined, TeamOutlined } from '@ant-design/icons'
import {Button} from "antd";

const Features = () => {
  return (
    <main className='details'>
      <header className='details-header'>
        <div className="wrapper">
          <Navigation/>

          <div className="details-header-content">
            <h1 className="details-header-content__title">
              Особенности
            </h1>
          </div>
        </div>
      </header>

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

export default Features;