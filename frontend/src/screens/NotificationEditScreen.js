import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listNotificationDetails, updateNotification } from '../actions/notificationActions'
import { NOTIFICATION_UPDATE_RESET } from '../constants/notificationConstants'


function NotificationEditScreen({ match, history }) {

    const notificationId = match.params.id

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    const dispatch = useDispatch()

    const notificationDetails = useSelector(state => state.notificationDetails)
    const { error, loading, notification } = notificationDetails

    const notificationUpdate = useSelector(state => state.notificationUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = notificationUpdate


    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: NOTIFICATION_UPDATE_RESET })
            history.push('/admin/notificationcenterlist')
        } else {
            if (!notification.name || notification._id !== Number(notificationId)) {
                dispatch(listNotificationDetails(notificationId))
            } else {
                setTitle(notification.title)
                setDescription(notification.description)
                setLink(notification.link)
            }
        }



    }, [dispatch, notification, notificationId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateNotification({
            _id: notificationId,
            title,
            description,
            link,
        }))
    }

    return (
        <div>
            <Link to='/admin/notificationcenterlist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Notification</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='title'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description'>
                                <Form.Label>Category</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='link'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter link'
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default NotificationEditScreen