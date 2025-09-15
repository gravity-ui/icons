import figma from '@figma/code-connect';

import {CopyTransparent} from '../lib';

figma.connect(
    CopyTransparent,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A137',
    {
        example: () => <CopyTransparent />,
    },
);
