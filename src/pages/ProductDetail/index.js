import React from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components'
import Main from '../../parts/ProductDetail'

function ProductDetail() {
    return (
        <div>
            <Navbar />
            <Main></Main>
            <Footer />
        </div>
    )
}

export default ProductDetail