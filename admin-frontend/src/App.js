import { useEffect, useState } from 'react';

// routing
import Routes from 'routes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';

import ThemeCustomization from 'themes';
import { useDispatch } from 'react-redux'; // Importing useDispatch from 'react-redux'
import { getDashboard } from 'store/slices/menu';

// auth provider
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';

// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getDashboard()).then(() => {
            setLoading(true);
        });
    }, []); // Empty dependency array because you want this effect to run only once

    return (
        <ThemeCustomization>
            <RTLLayout>
                <Locales>
                    <NavigationScroll>
                        <AuthProvider>
                            <>
                                <Routes />
                                <Snackbar />
                            </>
                        </AuthProvider>
                    </NavigationScroll>
                </Locales>
            </RTLLayout>
        </ThemeCustomization>
    );
};

export default App;
