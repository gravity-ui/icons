import figma from '@figma/code-connect';

import TextAlignRight from '../lib/TextAlignRight';

figma.connect(
    TextAlignRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4045%3A88342',
    {
        example: () => <TextAlignRight />,
    },
);
