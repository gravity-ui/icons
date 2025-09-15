import figma from '@figma/code-connect';

import {AbbrQl} from '../lib';

figma.connect(
    AbbrQl,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A662',
    {
        example: () => <AbbrQl />,
    },
);
