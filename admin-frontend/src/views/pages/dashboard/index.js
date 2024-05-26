import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import ServicesCard from './ServicesCard';
import UserCard from './UserCard';
import GrowthChart from './GrowthChart';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={6}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <UserCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <ServicesCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <GrowthChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
