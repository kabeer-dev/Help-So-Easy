// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, CardActions, Divider, Grid, TextField, FormHelperText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// ==============================|| ActionBar ||============================== //
function Settings() {
    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard title="Simple Action Bar" content={false}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12}>
                                        <InputLabel>Name</InputLabel>
                                        <TextField fullWidth placeholder="Enter full name" />
                                        <FormHelperText>Please enter your full name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard title="Action Button with Link" content={false}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel>Name</InputLabel>
                                        <TextField fullWidth placeholder="Enter full name" />
                                        <FormHelperText>Please enter your full name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid container display="flex" justifyContent="center" spacing={2}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard title="Right Align Action Bar" content={false}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12}>
                                        <InputLabel>Name</InputLabel>
                                        <TextField fullWidth placeholder="Enter full name" />
                                        <FormHelperText>Please enter your full name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard title="Horizontal Form" content={false}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12}>
                                        <Checkbox {...label} size="small" />
                                        <Checkbox {...label} defaultChecked />
                                        <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Name :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={8}>
                                        <TextField fullWidth placeholder="Enter full name" />
                                        <FormHelperText>Please enter your full name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4} />
                                    <Grid item xs={12} lg={6}>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Button variant="contained" color="secondary">
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Settings;
