import figma from '@figma/code-connect';

import {ArrowChevronDown} from '../lib';

figma.connect(
    ArrowChevronDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13288%3A18',
    {
        example: () => <ArrowChevronDown />,
    },
);
