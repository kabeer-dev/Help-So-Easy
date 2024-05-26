import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useConfig from 'hooks/useConfig';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import ModeIcon from '@mui/icons-material/Mode';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import img1 from 'assets/images/img-1.png';

import Google from 'assets/images/icons/google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const JWTLogin = ({ loginProp, ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const { borderRadius } = useConfig();
    const [checked, setChecked] = React.useState(true);
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const {login, register} = useAuth();
    // const googleHandler = async () => {
    //     try {
    //         await firebaseGoogleSignIn();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
            initialValues={{
                email: "",
                password: "",
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    await login(values.email, values.password);
                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    
                    if (scriptedRef.current) {
                        
                        setStatus({ success: false });
                        setErrors({ submit: err?.response?.data?.message ?? err.message});
                        setSubmitting(false);
                    }
                }
            }}
        >
       
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl variant="red" fullWidth error={Boolean(touched.email && errors.email)}>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                            // autoFocus="false"
                            placeholder="Email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={(e) => {
                                handleChange(e);
                                setEmail(e.target.value)
                            }}
                            
                            inputProps={{}}
                            iconPrimary={EmailTwoToneIcon}
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailTwoToneIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="start">
                                    <ModeIcon />
                                </InputAdornment>
                            }
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text--register">
                                <Grid>
                                    <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />
                                    <span style={{ paddingLeft: '9px', fontSize: '12px' }}>{errors.email}</span>
                                </Grid>
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        fullWidth
                        style={{ marginTop: '12px' }}
                        error={Boolean(touched.password && errors.password)}
                        variant="outlined"
                    >
                        <OutlinedInput
                            id="outlined-adornment-password-register1"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            placeholder="Password"
                            onBlur={handleBlur}
                            onChange={(e) => {
                                handleChange(e);
                                setPassword(e.target.value)
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="start"
                                        size="large"
                                        backgroundColor="#DCFFDC"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {touched.password && errors.password && (
                            <FormHelperText style={{ marginLeft: '0px' }} error id="standard-weight-helper-text-password-register1">
                                <Grid>
                                    <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />
                                    <span style={{ paddingLeft: '9px', fontSize: '12px' }}>{errors.password}</span>
                                </Grid>
                            </FormHelperText>
                        )}
                    </FormControl>

                    {/* {showPassword ? (
                        <>
                            {' '}
                            <Grid>
                                <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />{' '}
                                <span style={{ color: '#FB4B4B', paddingLeft: '9px', fontSize: '12px' }}>
                                    The email and password is incorrect
                                </span>
                            </Grid>
                            <Grid>
                                <img alt="not found" src={img1} style={{ height: '21px', width: '15px', paddingTop: '9px' }} />{' '}
                                <span style={{ color: '#FB4B4B', marginTop: '8px', paddingLeft: '9px', fontSize: '12px' }}>
                                    Your account is locked, 20 minutes left.
                                </span>
                            </Grid>
                        </>
                    ) : (
                        ''
                    )} */}
                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                            {/* {errors.submit === 'Please verify your email' ? (register(email, password), navigate('/verfication-code')) : ''} */}
                        </Box>
                    )}
                    {/* <Grid style={{ textAlign: 'right', paddingTop: '8px' }}>
                        <Link style={{ color: '#02B100' }} to="/forget-password">
                            Forget password?
                        </Link>
                    </Grid> */}

                    <Box sx={{ mt: 10 }}>
                        <Grid lg={12} style={{ textAlign: 'center' }}>
                            <AnimateButton>
                                <Button
                                    style={{ background: '#02B100', borderRadius: '20px', width: '170px', height: '35px', color : '#FFFFFF' }}
                                    disableElevation
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Log in
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Box>
                </form>
            )}
        </Formik>
        </>
    );
};

JWTLogin.propTypes = {
    loginProp: PropTypes.number
};

export default JWTLogin;
