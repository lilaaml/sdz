import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'


function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
            <div className='m-4'>
                {!keyword && <ProductCarousel />}

                <h1>Latest Products</h1>
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <div>
                            <Row className='m-4'>
                                {products.filter(product => {return product.category != 'Custom'})
                                .map(product => {
                                    return(
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                            <Product product={product} />  
                                        </Col>
                                    );
                                }

                                )}
                            </Row>
                            <Paginate page={page} pages={pages} keyword={keyword} />
                        </div>
                }
            </div>
    )
}

export default HomeScreen
