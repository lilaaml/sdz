import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listNotifications, deleteNotification, createNotification } from '../actions/notificationActions'
import { NOTIFICATION_CREATE_RESET } from '../constants/notificationConstants'

function NotificationCenterScreen({ history, match }) {

    const dispatch = useDispatch()

    const notificationList = useSelector(state => state.notificationList)
    const { loading, error, notifications, pages, page } = notificationList

    const notificationDelete = useSelector(state => state.notificationDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = notificationDelete

    const notificationCreate = useSelector(state => state.notificationCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, notification: createdNotification } = notificationCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search
    useEffect(() => {
        dispatch({ type: NOTIFICATION_CREATE_RESET })

        if (!userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/notificationcenter/${createdNotification._id}/edit`)
        } else {
            dispatch(listNotifications(keyword))
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createdNotification, keyword])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this notification?')) {
            dispatch(deleteNotification(id))
        }
    }

    const createNotificationHandler = () => {
        dispatch(createNotification())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Notification Center</h1>
                </Col>

                <Col className='text-right'>
                    <Button className='my-3' onClick={createNotificationHandler}>
                        <i className='fas fa-plus'></i> Create Notification
                    </Button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>TITLE</th>
                                        <th>DESCRIPTION</th>
                                        <th>LINK</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {notifications.map(notification => (
                                        <tr key={notification._id}>
                                            <td>{notification._id}</td>
                                            <td>{notification.title}</td>
                                            <td>{notification.description}</td>
                                            <td>{notification.link}</td>

                                            <td>
                                                <LinkContainer to={`/admin/notification/${notification._id}/edit`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>

                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(notification._id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Paginate pages={pages} page={page} isAdmin={true} />
                        </div>
                    )}
        </div>
    )
}

export default NotificationCenterScreen