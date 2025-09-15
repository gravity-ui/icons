import figma from '@figma/code-connect';

import {QuoteOpen} from '../lib';

figma.connect(
    QuoteOpen,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A875',
    {
        example: () => <QuoteOpen />,
    },
);
