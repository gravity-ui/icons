import figma from '@figma/code-connect';

import {OfficeBadge} from '../lib';

figma.connect(
    OfficeBadge,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A737',
    {
        example: () => <OfficeBadge />,
    },
);
