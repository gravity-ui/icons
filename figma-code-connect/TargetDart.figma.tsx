import figma from '@figma/code-connect';

import {TargetDart} from '../lib';

figma.connect(
    TargetDart,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1249',
    {
        example: () => <TargetDart />,
    },
);
