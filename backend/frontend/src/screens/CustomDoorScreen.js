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
    const [kuantitas, setKuantitas] = useState(0)
    const [warna, setWarna] = useState("")
    const [tipe, setTipe] = useState("")
    const [kunci, setKunci] = useState("")
    const [totalHarga, setTotalHarga] = useState("")

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreateV2 = useSelector(state => state.productCreateV2)
    const { loading: loadingCreateV2, error: errorCreateV2, success: successCreateV2, product: createdProductV2 } = productCreateV2


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search
    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_V2_RESET })

        if (successCreateV2) {
            history.push(`/cart/${createdProductV2._id}?qty=${createdProductV2.countInStock}`)
        } else {
            dispatch(listProducts(keyword))
        }

    }, [dispatch, history, userInfo, successDelete, successCreateV2, createdProductV2, keyword])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductV2({
            name: "Pintu Custom " +lebar + " x " + tinggi,
            price: parseInt((parseInt(lebar)+parseInt(tinggi))*parseInt(kuantitas)*2250),
            brand: "Sarana Pintu",
            category: "Custom",
            countInStock: kuantitas,
            description: "Pintu Custom dengan detail: \n" + "Warna: " + warna + "\n" + "Tipe: " + tipe + "\n" + "Kunci: " + kunci + "\n"
        }))
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
    })

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formUkuranLebar">
                    <Form.Label>Lebar</Form.Label>
                    <Form.Control type="number" placeholder="Lebar" onChange={(e) => setLebar(e.target.value)}/>
                    <p style={{ color: '#c61a09'}}>Lebar tidak boleh kurang dari 20cm atau lebih dari 100cm</p>
                </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formUkuranTinggi">
                    <Form.Label>Tinggi</Form.Label>
                    <Form.Control type="number" placeholder="Tinggi" onChange={(e) => setTinggi(e.target.value)}/>
                    <p style={{ color: '#c61a09'}}>Tinggi tidak boleh kurang dari 100cm atau lebih dari 240cm</p>
                </Form.Group>

                    </Col>
                </Row>

                <Form.Group  className="mb-3" controlId="formWarna">
                    <Form.Label>Tipe</Form.Label>
                    <Form.Control as="select" onChange={(e) => setWarna(e.target.value)}>
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
                    <Form.Control as="select" onChange={(e) => setKunci(e.target.value)}>
                        <option>Gagang</option>
                        <option>Kenob</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formTipe">
                    <Form.Label>Tipe</Form.Label>
                    <Form.Control as="select" onChange={(e) => setTipe(e.target.value)}>
                        <option>Pintu Millenial</option>
                        <option>Pintu PVC Biasa</option>
                        <option>Pintu PVC Panel</option>
                        <option>Pintu Alumunium</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Kuantitas">
                    <Form.Label>Kuantitas</Form.Label>
                    <Form.Control type="number" placeholder="Kuantitas" min={1} onChange={(e) => setKuantitas(e.target.value)}/>
                </Form.Group>

                <br></br>
                <Row>
                    <Col>
                        <Form.Label as="h4">Harga</Form.Label>
                    </Col>

                    <Col>
                        <Form.Label as="h4">{formatter.format((parseInt(lebar)+parseInt(tinggi))*parseInt(kuantitas)*2250)}</Form.Label>
                    </Col>

                </Row>
                <br></br>
                <br></br>
                {lebar < 20 || lebar > 100 || tinggi < 100 || tinggi > 240 || kuantitas === 0 ? (
                    <Message variant='primary'>
                        Please fill in all the required fields!
                    </Message>
                ) : (
                    <Button type='submit' variant='primary'>
                        Pesan Custom Pintu
                    </Button>
                )}
            </Form>
        </div>
    )
}

export default CustomDoorScreen