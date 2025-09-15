import figma from '@figma/code-connect';

import {Underline} from '../lib';

figma.connect(
    Underline,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2238%3A85270',
    {
        example: () => <Underline />,
    },
);
