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
    NOTIFICATION_CREATE_RESET,


    NOTIFICATION_UPDATE_REQUEST,
    NOTIFICATION_UPDATE_SUCCESS,
    NOTIFICATION_UPDATE_FAIL,
    NOTIFICATION_UPDATE_RESET,
} from '../constants/notificationConstants'


export const notificationListReducer = (state = { notifications: [] }, action) => {
    switch (action.type) {
        case NOTIFICATION_LIST_REQUEST:
            return { loading: true, notifications: [] }

        case NOTIFICATION_LIST_SUCCESS:
            return {
                loading: false,
                notifications: action.payload.notifications,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case NOTIFICATION_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const notificationDetailsReducer = (state = { notification: { reviews: [] } }, action) => {
    switch (action.type) {
        case NOTIFICATION_DETAILS_REQUEST:
            return { loading: true, ...state }

        case NOTIFICATION_DETAILS_SUCCESS:
            return { loading: false, notification: action.payload }

        case NOTIFICATION_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const notificationDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTIFICATION_DELETE_REQUEST:
            return { loading: true }

        case NOTIFICATION_DELETE_SUCCESS:
            return { loading: false, success: true }

        case NOTIFICATION_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const notificationCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTIFICATION_CREATE_REQUEST:
            return { loading: true }

        case NOTIFICATION_CREATE_SUCCESS:
            return { loading: false, success: true, notification: action.payload }

        case NOTIFICATION_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case NOTIFICATION_CREATE_RESET:
            return {}

        default:
            return state
    }
}



export const notificationUpdateReducer = (state = { notification: {} }, action) => {
    switch (action.type) {
        case NOTIFICATION_UPDATE_REQUEST:
            return { loading: true }

        case NOTIFICATION_UPDATE_SUCCESS:
            return { loading: false, success: true, notification: action.payload }

        case NOTIFICATION_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case NOTIFICATION_UPDATE_RESET:
            return { notification: {} }

        default:
            return state
    }
}