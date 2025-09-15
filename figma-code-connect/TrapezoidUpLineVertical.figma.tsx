import figma from '@figma/code-connect';

import {TrapezoidUpLineVertical} from '../lib';

figma.connect(
    TrapezoidUpLineVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22150%3A1618',
    {
        example: () => <TrapezoidUpLineVertical />,
    },
);
