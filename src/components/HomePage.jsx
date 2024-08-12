import React from 'react'
import Header from './Header'
import Categories from './Categories'
import Sliders from './Sliders'
import ProductdisplayScreen from './ProductdisplayScreen'

function HomePage() {
  return (
    <>
    <Header />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft: 30,
        paddingTop: 10,
        justifyContent:"space-around"
      }}
    >
      <Categories />
      <Sliders />
    </div>
    <ProductdisplayScreen />
    </>
  )
}


export default HomePage