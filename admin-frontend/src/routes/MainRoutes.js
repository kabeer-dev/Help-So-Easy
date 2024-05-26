import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Dashboard from 'views/pages/dashboard';
import Service from 'views/pages/services';
import Settings from 'views/pages/settings';
import AccountSetting from 'views/pages/AccountSetting';
import MailPage from 'views/pages/mail';
import EmailTemplate from 'views/pages/emailTemplate';
import ContactUs from 'views/pages/contactus';
import AboutUs from 'views/pages/aboutus';
import Terms from 'views/pages/termsofservices';
import GeneralSetting from 'views/pages/generalsetting';
import Faqs from 'views/pages/faqs';
import Catogery from 'views/pages/faqs/Catogery';
import Users from 'views/pages/users'
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Pluging = Loadable(lazy(() => import('views/pages/plugings')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/services',
            element: <Service />
        },
        {
            path: '/setting',
            element: <Settings />
        },
        {
            path: '/users',
            element: <Users />
        },
        {
            path: '/plugins',
            element: <Pluging />
        },
        {
            path: '/account-setting',
            element: <AccountSetting />
        },
        {
            path: '/email-template',
            element: <EmailTemplate/>
        },
       
        {
            path: '/faqs',
            element: <Faqs/>
        },
        {
            path: '/contacts-and-feedback',
            element: <ContactUs/>
        },
        {
            path: '/about-us',
            element: <AboutUs/>
        },
        {
            path: '/legal-terms',
            element: <Terms/>
        },
        {
            path: '/general-setting',
            element: <GeneralSetting/>
        },
        {
            path: '/faqs-categories',
            element: <Catogery/>
        },
    ]
};

export default MainRoutes;
