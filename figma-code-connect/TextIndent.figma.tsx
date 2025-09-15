import figma from '@figma/code-connect';

import TextIndent from '../lib/TextIndent';

figma.connect(
    TextIndent,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4693%3A99',
    {
        example: () => <TextIndent />,
    },
);
