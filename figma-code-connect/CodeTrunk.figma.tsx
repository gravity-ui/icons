import figma from '@figma/code-connect';

import {CodeTrunk} from '../lib';

figma.connect(
    CodeTrunk,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A86',
    {
        example: () => <CodeTrunk />,
    },
);
