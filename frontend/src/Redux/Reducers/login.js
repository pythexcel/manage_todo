import * as constants from "../constant";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
};

const Login = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                ...action.payload.response,
            };
        case constants.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                ...action.payload.response,
            };
        // case constants.LOGOUT:
        //     localStorage.clear()
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true,
        //         isSuccess: false,
        //     }
        // case constants.SOCIAL_LOGIN_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true,
        //         isError: false,
        //         isSuccess: false,
        //     };
        // case constants.SOCIAL_LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: false,
        //         isSuccess: true,
        //         ...action.payload.response,
        //     };
        // case constants.SOCIAL_LOGIN_ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isError: true,
        //         isSuccess: false,

        //     };
        default:
            return {
                ...state,
            };
    }
};
export default Login;
