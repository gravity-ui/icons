import figma from '@figma/code-connect';

import CodeCommits from '../lib/CodeCommits';

figma.connect(
    CodeCommits,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A720',
    {
        example: () => <CodeCommits />,
    },
);
