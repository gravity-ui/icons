import figma from '@figma/code-connect';

import CodeCommit from '../lib/CodeCommit';

figma.connect(
    CodeCommit,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A115',
    {
        example: () => <CodeCommit />,
    },
);
