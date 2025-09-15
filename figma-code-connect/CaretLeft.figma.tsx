import figma from '@figma/code-connect';

import {CaretLeft} from '../lib';

figma.connect(
    CaretLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3999%3A88344',
    {
        example: () => <CaretLeft />,
    },
);
