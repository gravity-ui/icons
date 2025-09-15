import figma from '@figma/code-connect';

import CodeFork from '../lib/CodeFork';

figma.connect(
    CodeFork,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A77',
    {
        example: () => <CodeFork />,
    },
);
