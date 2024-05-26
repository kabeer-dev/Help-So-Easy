import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Modals({ open, close }) {
    return (
        <div>
            <Modal open={open} onClose={close} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Grid sx={{}}>
                        <FormControlLabel value="" control={<Radio />} label="label 1" />
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Contact" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Notes" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ mt: 2 }}>
                        <FormControlLabel value="" control={<Radio />} label="label 2" />
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Contact" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Notes" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ mt: 2 }}>
                        <FormControlLabel value="" control={<Radio />} label="label 3" />
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Contact" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth id="outlined-basic" label="Notes" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid sx={{ pt: 1, display: 'flex', justifyContent: 'end' }}>
                            <Button
                                sx={{
                                    color: '#FFFFFF',
                                    background: 'green',
                                    border: 'none',
                                    borderRadius: '4px',
                                    Width: '71px',
                                    Height: '30px'
                                }}
                                onClick={close}
                            >
                                Close
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
