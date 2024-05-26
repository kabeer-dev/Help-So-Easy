import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import myAxios from 'utils/myAxios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '750px',
    overflowY: 'auto',
    width: 650,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function ModalMail({ open, close }) {
    const [formData, setFormData] = useState({
        smtpHost: '',
        port: '',
        smtpProtocol: '',
        security: '',
        smtpUser: '',
        emailFrom: '',
        testEmail: ''
    });

    useEffect(() => {
        myAxios
            .get('/admin/get-smtp')
            .then((res) => {
                const smtp = res.data.smtp;
                if (smtp) {
                    setFormData({
                        smtpHost: smtp.smtpHost,
                        port: smtp.port,
                        smtpProtocol: smtp.smtpProtocol,
                        security: smtp.security,
                        smtpUser: smtp.smtpUser,
                        emailFrom: smtp.emailFrom
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [error, setError] = useState('');
    const [errorColor, setErrorColor] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const isFormValid = () => {
        const requiredFields = ['smtpHost', 'port', 'smtpProtocol', 'security', 'smtpUser', 'emailFrom'];
        return requiredFields.every((field) => {
            const fieldValue = formData[field];
            // Convert fieldValue to a string
            const stringValue = String(fieldValue).trim();

            // Check if the trimmed string is not empty
            const isValidValue = typeof stringValue === 'string' && stringValue !== '';

            return isValidValue;
        });
    };

    const handleSmtp = () => {
        console.log(isFormValid());
        if (isFormValid()) {
            myAxios
                .post('/admin/save-smtp', formData)
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
                    setError('Error saving SMTP credentials. Please try again.');
                });
        } else {
            // Set error state for incomplete form
            setErrorColor('red');
            setError('Please fill in all required fields.');
        }
    };

    return (
        <div>
            <Modal open={open} onClose={close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Grid sx={{}}>
                        <Typography variant="h3" sx={{ py: 2 }}>
                            Mail Setting
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="smtpHost"
                                    label="STMP Host"
                                    variant="outlined"
                                    value={formData.smtpHost}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="port"
                                    label="Port"
                                    variant="outlined"
                                    value={formData.port}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="smtpProtocol"
                                    label="STMP Protocol"
                                    variant="outlined"
                                    value={formData.smtpProtocol}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="security"
                                    label="Security"
                                    variant="outlined"
                                    value={formData.security}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="smtpUser"
                                    label="STMP User"
                                    variant="outlined"
                                    value={formData.smtpUser}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="emailFrom"
                                    label="Email From"
                                    variant="outlined"
                                    value={formData.emailFrom}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="testEmail"
                                    label="Test Email"
                                    variant="outlined"
                                    value={formData.testEmail}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ pt: 2, display: 'flex', justifyContent: 'end' }}>
                                <Button
                                    onClick={handleSmtp}
                                    style={{
                                        color: '#FFFFFF',
                                        background: '#02B100',
                                        border: 'none',
                                        borderRadius: '4px',
                                        width: '71px',
                                        height: '30px'
                                    }}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {error && <div style={{ color: errorColor, marginTop: '10px' }}>{error}</div>}
                </Box>
            </Modal>
        </div>
    );
}
