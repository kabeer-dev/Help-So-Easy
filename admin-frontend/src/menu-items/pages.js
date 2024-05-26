// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug } from '@tabler/icons';

// constant
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { MdEditNote } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsPersonFillExclamation } from 'react-icons/bs';

const icons = { IconBug, IconKey };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="CRM" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        
            {
                id: 'FAQs',
                title: <FormattedMessage id="FAQs" />,
                type: 'item',
                icon: LiveHelpIcon,
                url: '/faqs'
            },
            {
                id: 'Legal Terms',
                title: <FormattedMessage id="Legal Terms" />,
                type: 'item',
                icon: MdEditNote,
                url: '/legal-terms'
                // target: true
            }
        ]
};

export default pages;
