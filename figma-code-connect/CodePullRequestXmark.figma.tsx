import figma from '@figma/code-connect';

import {CodePullRequestXmark} from '../lib';

figma.connect(
    CodePullRequestXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A527',
    {
        example: () => <CodePullRequestXmark />,
    },
);
