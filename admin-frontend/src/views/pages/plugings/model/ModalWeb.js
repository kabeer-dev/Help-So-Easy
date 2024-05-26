import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import myAxios from 'utils/myAxios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 800,
    width: 650,
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function ModalWeb({ open, close }) {
    const [formData, setFormData] = useState({
        activeServer: 'express',
        expressStun: '',
        expressUsername: '',
        expressPassword: '',
        expressTurn1: '',
        expressTurn2: '',
        expressTurn3: '',
        expressTurn4: '',
        expressTurn5: '',
        expressTurn6: '',
        twilioStun: '',
        twilioUsername: '',
        twilioPassword: '',
        twilioTurn1: '',
        twilioTurn2: '',
        twilioTurn3: '',
        twilioTurn4: '',
        twilioTurn5: '',
        twilioTurn6: '',
        xirsysStun: '',
        xirsysUsername: '',
        xirsysPassword: '',
        xirsysTurn1: '',
        xirsysTurn2: '',
        xirsysTurn3: '',
        xirsysTurn4: '',
        xirsysTurn5: '',
        xirsysTurn6: ''
    });

    useEffect(() => {
        myAxios.get('/admin/fetch-and-save-twilio-servers');
        myAxios
            .get('/admin/get-web-rtc')
            .then((res) => {
                const expressServer = res.data.expressServer;
                const twilioServer = res.data.twilioServer;
                const xirsysServer = res.data.xirsysServer;
                const currentActiveServer = res.data.activeServer;
                setFormData({
                    activeServer: currentActiveServer,
                    expressStun: expressServer.stunUrl,
                    expressUsername: expressServer.username,
                    expressPassword: expressServer.password,
                    expressTurn1: expressServer.turnUrl1,
                    expressTurn2: expressServer.turnUrl2,
                    expressTurn3: expressServer.turnUrl3,
                    expressTurn4: expressServer.turnUrl4,
                    expressTurn5: expressServer.turnUrl5,
                    expressTurn6: expressServer.turnUrl6,
                    twilioStun: twilioServer.stunUrl,
                    twilioUsername: twilioServer.username,
                    twilioPassword: twilioServer.password,
                    twilioTurn1: twilioServer.turnUrl1,
                    twilioTurn2: twilioServer.turnUrl2,
                    twilioTurn3: twilioServer.turnUrl3,
                    twilioTurn4: twilioServer.turnUrl4,
                    twilioTurn5: twilioServer.turnUrl5,
                    twilioTurn6: twilioServer.turnUrl6,
                    xirsysStun: xirsysServer.stunUrl,
                    xirsysUsername: xirsysServer.username,
                    xirsysPassword: xirsysServer.password,
                    xirsysTurn1: xirsysServer.turnUrl1,
                    xirsysTurn2: xirsysServer.turnUrl2,
                    xirsysTurn3: xirsysServer.turnUrl3,
                    xirsysTurn4: xirsysServer.turnUrl4,
                    xirsysTurn5: xirsysServer.turnUrl5,
                    xirsysTurn6: xirsysServer.turnUrl6
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSelectChange = (event) => {
        setFormData({ ...formData, activeServer: event.target.value });
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const [error, setError] = useState('');
    const [errorColor, setErrorColor] = useState('');

    const isFormValid = () => {
        let requiredFields;
        if (formData.activeServer === 'express') {
            requiredFields = ['expressStun', 'expressUsername', 'expressPassword', 'expressTurn1'];
        } else if (formData.activeServer === 'twilio') {
            requiredFields = ['twilioStun', 'twilioUsername', 'twilioPassword', 'twilioTurn1'];
        } else {
            requiredFields = ['xirsysStun', 'xirsysUsername', 'xirsysPassword', 'xirsysTurn1'];
        }
        return requiredFields.every((field) => formData[field].trim() !== '');
    };

    const handleWebRtc = () => {
        if (isFormValid()) {
            myAxios
                .post('/admin/save-web-rtc', formData)
                .then((res) => {
                    // Reset error state if the request is successful
                    setErrorColor('green');
                    setError('Web RTC credentials saved successfully');
                    close();
                })
                .catch((error) => {
                    console.error(error);
                    // Set error state with the error message
                    setErrorColor('red');
                    setError('Error saving Web RTC credentials. Please try again.');
                });
        } else {
            // Set error state for incomplete form
            setErrorColor('red');
            let Server = '';
            if (formData.activeServer === 'express') {
                Server = 'Express';
            } else if (formData.activeServer === 'twilio') {
                Server = 'Twilio';
            } else {
                Server = 'Xirsys';
            }
            setError(`${Server} fields are required with at least 1 turn server URL.`);
        }
    };

    return (
        <div>
            <Modal open={open} onClose={close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Grid container>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                id="activeKeys"
                                value={formData.activeServer}
                                onChange={handleSelectChange}
                                name="radio-buttons-group"
                            >
                                <Grid sx={{}}>
                                    <FormControlLabel value="express" control={<Radio />} label="Express Turn" />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressStun"
                                                onChange={handleInputChange}
                                                value={formData.expressStun}
                                                label="STUN URL"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressUsername"
                                                onChange={handleInputChange}
                                                value={formData.expressUsername}
                                                label="User Name"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressPassword"
                                                onChange={handleInputChange}
                                                value={formData.expressPassword}
                                                label="Password"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn1"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn1}
                                                label="TURN URL 1"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn2"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn2}
                                                label="TURN URL 2"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn3"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn3}
                                                label="TURN URL 3"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn4"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn4}
                                                label="TURN URL 4"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn5"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn5}
                                                label="TURN URL 5"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="expressTurn6"
                                                onChange={handleInputChange}
                                                value={formData.expressTurn6}
                                                label="TURN URL 6"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ pt: 3 }}>
                                    <FormControlLabel value="twilio" control={<Radio />} label="TWILIO" />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioStun"
                                                onChange={handleInputChange}
                                                value={formData.twilioStun}
                                                label="STUN URL"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioUsername"
                                                onChange={handleInputChange}
                                                value={formData.twilioUsername}
                                                label="User Name"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioPassword"
                                                onChange={handleInputChange}
                                                value={formData.twilioPassword}
                                                label="Password"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn1"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn1}
                                                label="TURN URL 1"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn2"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn2}
                                                label="TURN URL 2"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn3"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn3}
                                                label="TURN URL 3"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn4"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn4}
                                                label="TURN URL 4"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn5"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn5}
                                                label="TURN URL 5"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="twilioTurn6"
                                                onChange={handleInputChange}
                                                value={formData.twilioTurn6}
                                                label="TURN URL 6"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ pt: 3 }}>
                                    <FormControlLabel value="xirsys" control={<Radio />} label="XIRSYS" />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysStun"
                                                onChange={handleInputChange}
                                                value={formData.xirsysStun}
                                                label="STUN URL"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysUsername"
                                                onChange={handleInputChange}
                                                value={formData.xirsysUsername}
                                                label="User Name"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysPassword"
                                                onChange={handleInputChange}
                                                value={formData.xirsysPassword}
                                                label="Password"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn1"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn1}
                                                label="TURN URL 1"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn2"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn2}
                                                label="TURN URL 2"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn3"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn3}
                                                label="TURN URL 3"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn4"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn4}
                                                label="TURN URL 4"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn5"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn5}
                                                label="TURN URL 5"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="xirsysTurn6"
                                                onChange={handleInputChange}
                                                value={formData.xirsysTurn6}
                                                label="TURN URL 6"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: 2, display: 'flex', justifyContent: 'end' }}>
                                            <Button
                                                onClick={handleWebRtc}
                                                style={{
                                                    color: '#FFFFFF',
                                                    background: '#0089cc',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    Width: '71px',
                                                    Height: '30px'
                                                }}
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {error && <div style={{ color: errorColor, marginTop: '10px' }}>{error}</div>}
                </Box>
            </Modal>
        </div>
    );
}
