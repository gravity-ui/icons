import figma from '@figma/code-connect';

import {CrownDiamond} from '../lib';

figma.connect(
    CrownDiamond,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78826',
    {
        example: () => <CrownDiamond />,
    },
);
