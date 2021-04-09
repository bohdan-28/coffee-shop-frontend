import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components'
import Main from '../../parts/ProductDetail'

function ProductDetail() {
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])


    return (
        <div>
            <Navbar />
            <Main count={count} setCount={setCount} title="Cold asd" desc="Cold brewing is a method of brewing" price="30000" cart={cart} setCart={setCart}></Main>
            <Footer />
        </div>
    )
}

export default ProductDetail