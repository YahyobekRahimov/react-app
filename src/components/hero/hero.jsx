import React from 'react';
import './hero.css';
import arrow from '../../images/arrow-right.svg';
import heroImg from '../../images/hero.png';
import user from '../../images/user.svg';
import star from '../../images/star.svg';
import harvest from '../../images/harvest.svg';
import hero3x from '../../images/hero-3x.png';
import hero2x from '../../images/hero-2x.png';

export default function Hero() {
  return (
    <section className='hero'>
        <div className="container hero__container">
          <div className="hero__intro">
            <h1 className='hero__title'>Organic Fruit & Vegetables</h1>
            <p className='hero__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
            <div className="order-button">
              <span>Order now</span>
              <button>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="hero__stats-wrapper">
            <picture>
              <source media="(min-width: 1200px)" srcset={hero3x} />
              <source media="(min-width: 800px)" srcset={hero2x} />
              <img src={heroImg} alt="hero img" /> 
            </picture>
            <div className="hero__stats">
              <div className="hero__stats__block">
                  <div className="stats__block__img-wrapper">
                    <img src={user} alt="user" />
                  </div>
                  <div className='number-wrapper'>
                    <span className="number">30K</span>
                    <span className='description'>User Order</span>
                  </div>
              </div>
              <div className="hero__stats__block">
                  <div className="stats__block__img-wrapper">
                    <img src={star} alt="star" />
                  </div>
                  <div className='number-wrapper'>
                    <span className="number">20K</span>
                    <span className='description'>Reviews(4.8)</span>
                  </div>
              </div>
              <div className="hero__stats__block">
                  <div className="stats__block__img-wrapper">
                    <img src={harvest} alt="harvest" />
                  </div>
                  <div className='number-wrapper'>
                    <span className="number">300</span>
                    <span className='description'>Items</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
