import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components'
import Main from '../../parts/ProductDetail'
import { getProductById } from '../../configs/redux/actions/product'

function ProductDetail(props) {
    const dispatch = useDispatch();

    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])

    const { product } = useSelector(state => state.product)

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getProductById(id))
    }, [])
    return (
        <div>
            <Navbar />
            <Main count={count} setCount={setCount} title={product.name} desc={product.description} price={product.price} cart={cart} setCart={setCart}></Main>
            <Footer />
        </div>
    )
}

export default ProductDetail