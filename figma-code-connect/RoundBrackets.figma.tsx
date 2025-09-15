import figma from '@figma/code-connect';

import {RoundBrackets} from '../lib';

figma.connect(
    RoundBrackets,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A911',
    {
        example: () => <RoundBrackets />,
    },
);
