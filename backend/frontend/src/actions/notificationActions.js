import axios from 'axios'
import {
    NOTIFICATION_LIST_REQUEST,
    NOTIFICATION_LIST_SUCCESS,
    NOTIFICATION_LIST_FAIL,

    NOTIFICATION_DETAILS_REQUEST,
    NOTIFICATION_DETAILS_SUCCESS,
    NOTIFICATION_DETAILS_FAIL,

    NOTIFICATION_DELETE_REQUEST,
    NOTIFICATION_DELETE_SUCCESS,
    NOTIFICATION_DELETE_FAIL,

    NOTIFICATION_CREATE_REQUEST,
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_FAIL,

    NOTIFICATION_UPDATE_REQUEST,
    NOTIFICATION_UPDATE_SUCCESS,
    NOTIFICATION_UPDATE_FAIL,
} from '../constants/notificationConstants'


export const listNotifications = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: NOTIFICATION_LIST_REQUEST })

        const { data } = await axios.get(`/api/notifications${keyword}`)

        dispatch({
            type: NOTIFICATION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NOTIFICATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listNotificationDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: NOTIFICATION_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/notifications/${id}`)

        dispatch({
            type: NOTIFICATION_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NOTIFICATION_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteNotification = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTIFICATION_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/notifications/delete/${id}/`,
            config
        )

        dispatch({
            type: NOTIFICATION_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: NOTIFICATION_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const createNotification = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTIFICATION_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/notifications/create/`,
            {},
            config
        )
        dispatch({
            type: NOTIFICATION_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: NOTIFICATION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateNotification = (notification) => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTIFICATION_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/notifications/update/${notification._id}/`,
            notification,
            config
        )
        dispatch({
            type: NOTIFICATION_UPDATE_SUCCESS,
            payload: data,
        })


        dispatch({
            type: NOTIFICATION_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: NOTIFICATION_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}