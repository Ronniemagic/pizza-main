import React from 'react'
import Cards from './Cards'

function Pizza() {
  return (
    <div className="container-fluid">
      <h1 className="text-center"> Pizza Types</h1>
    <div className='row'>
    <Cards pizzName="Cheezy Pizza" pizzaText="Some quick example text to build on the card title and make up the bulk of the card's content." imgSrc="./images/cheezy.avif"/>
    <Cards pizzName="Family Pizza" pizzaText="Some quick example text to build on the card title and make up the bulk of the card's content." imgSrc="./images/family.avif"/>
    <Cards pizzName="Peperoni Pizza" pizzaText="Some quick example text to build on the card title and make up the bulk of the card's content." imgSrc="./images/peperoni.avif"/>
    <Cards pizzName="Vegetable Pizza" pizzaText="Some quick example text to build on the card title and make up the bulk of the card's content." imgSrc="./images/./about.avif"/>
    </div>
    </div>
  )
}

export default Pizza
