import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT, REGISTER} from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axios from 'utils/myAxios';
// import { async } from 'q';

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    const decoded = jwtDecode(serviceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    const logout = () => {
        console.log("Logging out")
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    useEffect(() => {
        const init = async () => {
            try {
                const serviceToken = window.localStorage.getItem('serviceToken');
                if (serviceToken && verifyToken(serviceToken)) {
                    setSession(serviceToken);
                    const response = await axios.get('/account/me');
                    const { user } = response.data.data;
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user
                        }
                    });
                } else {
                    console.log("on faulty token loging out")
                    logout()
                }
            } catch (err) {
                console.log("on expired token loging out")
                logout()
            }
        };

        init();
    }, []);

    const login = async (email, password) => {
        const response = await axios.post("/auth/admin/login", { email, password });
        const { user, accessToken } = response.data.data;
        setSession(accessToken);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user
            }
        });
    };

    const register = async (email, password) => {
        // todo: this flow need to be recode as it not verified
        const response = await axios.post('/auth/sign-up', {email, password});
        const { user } = response.data.data;
        // console.log(response.data.data)
        // setSession(accessToken);
        dispatch({
            type: REGISTER,
            payload: {
                isLoggedIn: false,
                user
            }
        });
    };



  

    const autoRefresh = async () => {
        const serviceToken = window.localStorage.getItem('serviceToken');
            if (serviceToken && verifyToken(serviceToken)) {
                setSession(serviceToken);
                const response = await axios.get('/user/profile');
                const { user } = response.data.data;
                dispatch({
                    type: LOGIN,
                    payload: {
                        isLoggedIn: true,
                        user
                    }
                });
            } else {
                console.log("on faulty token loging out")
                logout()
            }
    };

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <JWTContext.Provider value={{ ...state, login, logout, register, autoRefresh }}>{children}</JWTContext.Provider>
    );
};

JWTProvider.propTypes = {
    children: PropTypes.node
};

export default JWTContext;
