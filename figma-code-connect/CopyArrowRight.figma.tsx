import figma from '@figma/code-connect';

import {CopyArrowRight} from '../lib';

figma.connect(
    CopyArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1200',
    {
        example: () => <CopyArrowRight />,
    },
);
