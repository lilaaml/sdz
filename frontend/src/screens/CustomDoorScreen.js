import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts, deleteProduct, createProductV2 } from '../actions/productActions'
import { PRODUCT_CREATE_V2_RESET } from '../constants/productConstants'

function CustomDoorScreen({ match, location, history }) {
    const dispatch = useDispatch()

    const [lebar, setLebar] = useState("")
    const [tinggi, setTinggi] = useState("")
    const [hasil, setHasil] = useState("")

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreateV2 = useSelector(state => state.productCreateV2)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreateV2


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search
    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_V2_RESET })

    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, keyword])

    const createProductV2Handler = () => {
        dispatch(createProductV2())        
    }

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formUkuranLebar">
                    <Form.Label>Lebar</Form.Label>
                    <Form.Control type="number" placeholder="Lebar" min={0} value={lebar} onChange={(e) => setLebar(e.target.value)}/>
                </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formUkuranTinggi">
                    <Form.Label>Tinggi</Form.Label>
                    <Form.Control type="number" placeholder="Tinggi" min={0} value={tinggi} onChange={(e) => setTinggi(e.target.value)}/>
                </Form.Group>

                    </Col>
                </Row>


            <Form.Group  className="mb-3" controlId="formTipe">
                <Form.Label>Tipe</Form.Label>
                <Form.Control as="select">
                    <option>Merah</option>
                    <option>Kuning</option>
                    <option>Hijau</option>
                    <option>Jingga</option>
                    <option>Biru</option>
                    <option>Nila</option>
                </Form.Control>
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formKunci">
                <Form.Label>Kunci</Form.Label>
                <Form.Control as="select">
                    <option>Gagang</option>
                    <option>Kenob</option>
                </Form.Control>
            </Form.Group>
            


            <Form.Group  className="mb-3" controlId="formTipe">
                <Form.Label>Tipe</Form.Label>
                <Form.Control as="select">
                    <option>Pintu Millenial</option>
                    <option>Pintu PVC Biasa</option>
                    <option>Pintu PVC Panel</option>
                    <option>Pintu Alumunium</option>
                </Form.Control>
            </Form.Group>

            <Row>
                <Col>

                {hasil ? <span>({hasil})</span> : ''}

                </Col>
                <Col>
                <Form.Label>Harga</Form.Label>
                </Col>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formHarga">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" placeholder="Harga"/>
            </Form.Group> */}



            <Button variant="primary" type="submit">
                Masukkan Keranjang
            </Button>

            <Button className='my-3' onClick={createProductV2Handler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
            </Form>
        </div>
    )
}

export default CustomDoorScreen