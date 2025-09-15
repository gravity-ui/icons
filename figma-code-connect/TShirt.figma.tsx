import figma from '@figma/code-connect';

import {TShirt} from '../lib';

figma.connect(
    TShirt,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79257',
    {
        example: () => <TShirt />,
    },
);
