import figma from '@figma/code-connect';

import {EyesLookRight} from '../lib';

figma.connect(
    EyesLookRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A121',
    {
        example: () => <EyesLookRight />,
    },
);
