import figma from '@figma/code-connect';

import {Archive} from '../lib';

figma.connect(
    Archive,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A77246',
    {
        example: () => <Archive />,
    },
);
