import figma from '@figma/code-connect';

import {QuoteClose} from '../lib';

figma.connect(
    QuoteClose,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A867',
    {
        example: () => <QuoteClose />,
    },
);
