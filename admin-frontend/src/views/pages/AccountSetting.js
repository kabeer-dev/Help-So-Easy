// material-ui
import { useTheme } from '@mui/material/styles';
import { Alert, AlertTitle, Button, Grid, TextField } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| PROFILE 1 - CHANGE PASSWORD ||============================== //

const AccountSetting = () => {
    const theme = useTheme();
    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="Change Password">
                        <form noValidate autoComplete="off">
                            <Grid container spacing={gridSpacing} sx={{ mb: 1.75 }}>
                                <Grid item xs={12} md={6}>
                                    <TextField type="password" id="outlined-basic8" fullWidth label="New Password" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField type="password" id="outlined-basic9" fullWidth label="Confirm Password" />
                                </Grid>
                            </Grid>
                        </form>
                        <Grid spacing={2} container justifyContent="flex-end" sx={{ mt: 3 }}>
                            <Grid item>
                                <AnimateButton>
                                    <Button variant="contained">Change Password</Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default AccountSetting;
