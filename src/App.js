import React, { useState } from 'react'
import './App.css'
import Card from './components/card'

/** Product Images */
import product1 from './assets/images/product1.jpg'
import product2 from './assets/images/product2.jpg'
import product3 from './assets/images/product3.jpg'
import product4 from './assets/images/product4.jpg'

function App() {
  const [productList, setProductList] = useState(
    [
      {
        id: 1,
        price: 200,
        title: "Sunglasses",
        image: product1,
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        price: 15,
        title: "Cupcake",
        image: product2,
        info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
      {
        id: 3,
        price: 150,
        title: "Gameboy",
        image: product3,
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        price: 50,
        title: "Toy Car",
        image: product4,
        info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    ]
  )

  const [basketList, setBasketList] = useState([])

  return (
    <div className="react-page">
      <div className="grid-items">
        {productList.map((product, index) => {
          return(
            <Card key={product.id} title={product.title} image={product.image} info={product.info} onClick={() => {
              const arr=[...basketList]
              arr.push(product)
              setBasketList(arr)
              console.log(basketList)
            }} />
          )
        })}
      </div>
      {basketList.length > 0 && <div className="console-log">
        <h4>Console Log</h4>
        {basketList.map((basketList, index) => {
          return(
            <div key={index}>
              {JSON.stringify(basketList)}
            </div>
          )
        })}
        </div>
      }
    </div>
  )
}

export default App
