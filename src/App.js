import React from 'react';

import './App.css'
import GameCard from './components/GameCard';
import Heading from './components/Heading';
import Menu from './components/Menu';

function App() {

  const cards = [
    {
      title: 'Crosscode',
      developer: 'Radical Fish Games',
      img: 'https://source.unsplash.com/random/800x800',
      price: 'R$ 36,99'
    },
    {
      title: 'Resident 7',
      developer: 'Capcom',
      img: 'https://source.unsplash.com/random/800x800',
      price: 'R$ 59,99'
    },
    {
      title: 'Biomutant',
      developer: 'Experiment 101',
      img: 'https://source.unsplash.com/random/800x800',
      price: 'R$ 199,99'
    },
    {
      title: 'Ori',
      developer: 'Moon Studios',
      img: 'https://source.unsplash.com/random/800x800',
      price: 'R$ 149,99'
    },
  ]

  return(
    <main>
      <div className="container">
        <Menu />
      </div>
      <section className="container">
        <Heading title="New Games" />
        <div className="card-container">
          {
            cards.map((card, index) => {
              return (
                <GameCard 
                  key={index}
                  title={card.title}
                  developer={card.developer}
                  img={card.img}
                  price={card.price}
                />
              );
            }) 
          }
        </div>        
      </section>

      <section className="container">
        <Heading title="Most Popular" />
        <div className="card-container">
          {
            cards.map((card, index) => {
              return (
                <GameCard 
                  key={index}
                  title={card.title}
                  developer={card.developer}
                  img={card.img}
                  price={card.price}
                />
              );
            }) 
          }
        </div>        
      </section>

      <section className="container">
        <Heading title="Upcoming" />
        <div className="card-container">
          {
            cards.map((card, index) => {
              return (
                <GameCard 
                  key={index}
                  title={card.title}
                  developer={card.developer}
                  img={card.img}
                  price={card.price}
                />
              );
            }) 
          }
        </div>        
      </section>

      <section className="container">
        <Heading title="Free Games" />
        <div className="card-container">
          {
            cards.map((card, index) => {
              return (
                <GameCard 
                  key={index}
                  title={card.title}
                  developer={card.developer}
                  img={card.img}
                  price={card.price}
                />
              );
            }) 
          }
        </div>        
      </section>
    </main>
  )
}

export default App;
