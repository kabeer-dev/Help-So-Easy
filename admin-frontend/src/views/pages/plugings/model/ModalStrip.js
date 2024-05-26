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
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function ModalStrip({ open, close }) {

    const [formData, setFormData] = useState({
        activeKeys: 'test',
        testPublicKey: '',
        testSecretKey: '',
        livePublicKey: '',
        liveSecretKey: ''
    });

    useEffect(() => {
        myAxios
            .get('/admin/get-stripe')
            .then((res) => {
                const stripe = res.data.stripe;
                if(stripe) {
                    setFormData({
                        activeKeys: stripe.activeKeys,
                        testPublicKey: stripe.testPublicKey,
                        testSecretKey: stripe.testSecretKey,
                        livePublicKey: stripe.livePublicKey,
                        liveSecretKey: stripe.liveSecretKey
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);

    const [error, setError] = useState('');
    const [errorColor, setErrorColor] = useState('');

    const isFormValid = () => {
        let requiredFields;

        if (formData.activeKeys === 'test') {
            requiredFields = ['testPublicKey', 'testSecretKey'];
        } else {
            requiredFields = ['livePublicKey', 'liveSecretKey'];
        }

        return requiredFields.every((field) => formData[field].trim() !== '');
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSelectChange = (event) => {
        setFormData({ ...formData, activeKeys: event.target.value });
    };

    const handleStripe = () => {
        if (isFormValid()) {
            myAxios
                .post('/admin/save-stripe', formData)
                .then((res) => {
                    // Reset error state if the request is successful
                    setErrorColor('green');
                    setError('SMTP credentials saved successfully');
                    close();
                })
                .catch((error) => {
                    console.error(error);
                    // Set error state with the error message
                    setErrorColor('red');
                    setError('Error saving stripe credentials. Please try again.');
                });
        } else {
            // Set error state for incomplete form
            setErrorColor('red');
            let mode = '';
            if (formData.activeKeys === 'test') {
                mode = 'Test';
            } else {
                mode = 'Live';
            }
            setError(`${mode} Public and Secret key is required.`);
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
                                value={formData.activeKeys}
                                onChange={handleSelectChange}
                                name="radio-buttons-group"
                            >
                                <Grid sx={{}}>
                                    <FormControlLabel value="test" control={<Radio />} label="Test Mode" />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="testPublicKey"
                                                onChange={handleInputChange}
                                                label="Public key"
                                                variant="outlined"
                                                value={formData.testPublicKey}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="testSecretKey"
                                                onChange={handleInputChange}
                                                label="Secret key"
                                                variant="outlined"
                                                value={formData.testSecretKey}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ pt: 2 }}>
                                    <FormControlLabel value="live" control={<Radio />} label="Live  Mode" />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="livePublicKey"
                                                onChange={handleInputChange}
                                                label="Public key"
                                                variant="outlined"
                                                value={formData.livePublicKey}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="liveSecretKey"
                                                onChange={handleInputChange}
                                                label="Secret key"
                                                variant="outlined"
                                                value={formData.liveSecretKey}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: 2, display: 'flex', justifyContent: 'end' }}>
                                            <Button
                                                onClick={handleStripe}
                                                style={{
                                                    color: '#FFFFFF',
                                                    background: '#635BFF',
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
