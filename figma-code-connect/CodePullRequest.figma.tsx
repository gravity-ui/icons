import figma from '@figma/code-connect';

import CodePullRequest from '../lib/CodePullRequest';

figma.connect(
    CodePullRequest,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A106',
    {
        example: () => <CodePullRequest />,
    },
);
