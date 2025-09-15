import figma from '@figma/code-connect';

import {CodeCompare} from '../lib';

figma.connect(
    CodeCompare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A669',
    {
        example: () => <CodeCompare />,
    },
);
