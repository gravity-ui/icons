import figma from '@figma/code-connect';

import Code from '../lib/Code';

figma.connect(
    Code,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A63',
    {
        example: () => <Code />,
    },
);
