import figma from '@figma/code-connect';

import CodeCommitHorizontal from '../lib/CodeCommitHorizontal';

figma.connect(
    CodeCommitHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A677',
    {
        example: () => <CodeCommitHorizontal />,
    },
);
