import figma from '@figma/code-connect';

import {ArrowRight} from '../lib';

figma.connect(
    ArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3857%3A87202',
    {
        example: () => <ArrowRight />,
    },
);
