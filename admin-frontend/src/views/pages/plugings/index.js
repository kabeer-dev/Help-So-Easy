// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';

// project imports

import UserSimpleCard from 'ui-component/cards/UserSimpleCard';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import PlugingCard from 'ui-component/cards/PlugingCard';
import PlugingMail from './pluging/PlugingMail';
import PlugingStrip from './pluging/PlugingStrip';
import PlugingWeb from './pluging/PlugingWeb';

const simpleCard = {
    id: '#Mail_Settings',
    avatar: 'mail.png',
    name: 'Mail Setting',
    status: 'Active',
    col: '#02B100',
    btnName: 'Update'
};
const simpleCard2 = {
    id: '#Stripe',
    avatar: 'strip.png',
    name: 'Stripe',
    status: 'Active',
    col: '#635BFF',
    btnName: 'Update'
};
const simpleCard3 = {
    id: '#WebRTC',
    avatar: 'Webrtc.png',
    name: 'WebRTC',
    status: 'Active',
    col: '#0089cc',
    btnName: 'Update'
};
// ===============================|| UI CARDS ||=============================== //

const Pluging = () => {
    const theme = useTheme();
    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };

    return (
        <>
            {/* <MainCard title="Cards" secondary={<SecondaryAction link="https://next.material-ui.com/components/cards/" />}> */}
            <Grid container spacing={gridSpacing}>
                <Grid item xs={6} lg={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <PlugingMail {...simpleCard} />
                    </SubCard>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <PlugingStrip {...simpleCard2} />
                    </SubCard>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <PlugingWeb {...simpleCard3} />
                    </SubCard>
                </Grid>
            </Grid>

            {/* </MainCard> */}
        </>
    );
};

export default Pluging;
