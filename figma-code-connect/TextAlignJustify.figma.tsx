import figma from '@figma/code-connect';

import {TextAlignJustify} from '../lib';

figma.connect(
    TextAlignJustify,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4045%3A88422',
    {
        example: () => <TextAlignJustify />,
    },
);
