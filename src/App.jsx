/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);

  const handleCart = (p) => {
    const isExist = cart.find((product) => product.id === p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert('Already in Cart')
    }
  }

  const handleDelete = (id) =>{
    const newCart = cart.filter(item=> item.id != id)
    setCart(newCart);
  }
  return (
    <>
      {/* main container */}
      <div className='flex justify-around container mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
          {
            products.map(product => <SingleProduct key={product.id} product={product} handleCart={handleCart}></SingleProduct>)
          }

        </div>

        <div className='w-[350px] shadow-gray-400 shadow-xl h-1/4 text-center p-2'>
          <h1>Cart</h1>
          <div className='flex justify-around border'>
            <h1>Name</h1>
            <h1>Price</h1>
          </div>
          <div className='grid gap-4'>
            {
              cart.map((item,index) => (
                <div className='flex justify-around shadow-2xl p-3'>
                  <p className='mr-[-43px]'>{index+1}</p>
                  <h1 className='w-20'>{item.title.slice(0, 11)}</h1>
                  <div className>
                    <h1>${item.price}</h1>
                    <button onClick={()=>handleDelete(item.id)} className='h-8 w-13 p-1 rounded-md bg-slate-400'>Delete</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
