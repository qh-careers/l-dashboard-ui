import * as Icon from 'react-feather';

import { MessageCircle } from 'react-feather';

const SidebarData = [
  {
    title: 'CRM Analysis',
    href: '/dashboards/CRMAnalytics',
    icon: <Icon.Loader />,
    id: 5.1,
    collapisble: false,
  },
  {
    title: 'Process WorkFlow',
    href: '/dashboards/analytics',
    icon: <Icon.PieChart />,

    id: 2.2,
    collapisble: false,
  },
  {
    title: 'Talk to Data',
    href: '/dashboards/chat',
    icon: <Icon.MessageCircle />,

    id: 5.2,
    collapisble: false,
  },
  {
    title: 'Production',
    href: '/dashboards/production',
    icon: <Icon.Settings />,
   
  },
  {
    title: 'Operations',
    href: '/dashboards/operations',
    icon: <Icon.Loader />,
    id: 5.1,
    collapisble: false,
  },
  {
    title: 'Training Ground',
    href: '/dashboards/trainingGround',
    icon: <Icon.Activity />,
    id: 5.1,
    collapisble: false,
  },
  {
    title: 'Predictions',
    href: '/dashboards/predictions',
    icon: <Icon.CheckSquare />,
    id: 5.1,
    collapisble: false,
  },
  {
    title: 'Whatsapp',
    href: '/dashboards/whatsAppChat',
    icon: <Icon.MessageSquare />,
    id: 5.1,
    collapisble: false,
  }

 

 
];

export default SidebarData;

