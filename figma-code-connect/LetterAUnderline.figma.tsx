import figma from '@figma/code-connect';

import {LetterAUnderline} from '../lib';

figma.connect(
    LetterAUnderline,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=25892%3A2032',
    {
        example: () => <LetterAUnderline />,
    },
);
