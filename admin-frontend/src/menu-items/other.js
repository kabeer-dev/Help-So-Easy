// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconTemplate } from '@tabler/icons';
import SettingsIcon from '@mui/icons-material/Settings';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ExtensionIcon from '@mui/icons-material/Extension';
import SpeedIcon from '@mui/icons-material/Speed';
import { IoIosPeople } from 'react-icons/io';
// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap,
    SettingsIcon,
    MiscellaneousServicesIcon,
    IconTemplate,
    ExtensionIcon,
    SpeedIcon
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    icon: icons.IconHelp,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.SpeedIcon
        },
        {
            id: 'services',
            title: <FormattedMessage id="Services" />,
            type: 'item',
            url: '/services',
            icon: icons.MiscellaneousServicesIcon
        },
        {
            id: 'users',
            title: <FormattedMessage id="Users" />,
            type: 'item',
            url: '/users',
            icon: IoIosPeople,
        },
        {
            id: 'email',
            title: <FormattedMessage id="Email Template" />,
            type: 'item',
            url: '/email-template',
            icon: icons.IconTemplate
        },
        // {
        //     id: 'setting',
        //     title: <FormattedMessage id="Settings" />,
        //     type: 'item',
        //     url: '/setting',
        //     icon: icons.SettingsIcon
        // },
        {
            id: 'plugins',
            title: <FormattedMessage id="Plugins" />,
            type: 'item',
            url: '/plugins',
            icon: icons.ExtensionIcon
        }

        // {
        //     id: 'sample-page',
        //     title: <FormattedMessage id="sample-page" />,
        //     type: 'item',
        //     url: '/sample-page',
        //     icon: icons.IconBrandChrome,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'documentation',
        //     title: <FormattedMessage id="documentation" />,
        //     type: 'item',
        //     url: 'https://codedthemes.gitbook.io/berry/',
        //     icon: icons.IconHelp,
        //     external: true,
        //     target: true
        // },
        // {
        //     id: 'roadmap',
        //     title: <FormattedMessage id="roadmap" />,
        //     type: 'item',
        //     url: 'https://codedthemes.gitbook.io/berry/roadmap',
        //     icon: icons.IconSitemap,
        //     external: true,
        //     target: true
        // }
    ]
};

export default other;
