import figma from '@figma/code-connect';

import {CodeMerge} from '../lib';

figma.connect(
    CodeMerge,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A96',
    {
        example: () => <CodeMerge />,
    },
);
