import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components'
import Main from '../../parts/ProductDetail'

function ProductDetail() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />
            <Main count={count} setCount={setCount} title="Cold asd" desc="Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours." price="30.000"></Main>
            <Footer />
        </div>
    )
}

export default ProductDetail