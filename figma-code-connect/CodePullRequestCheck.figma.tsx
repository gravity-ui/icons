import figma from '@figma/code-connect';

import {CodePullRequestCheck} from '../lib';

figma.connect(
    CodePullRequestCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A518',
    {
        example: () => <CodePullRequestCheck />,
    },
);
