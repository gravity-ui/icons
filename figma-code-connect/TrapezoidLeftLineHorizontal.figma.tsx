import figma from '@figma/code-connect';

import {TrapezoidLeftLineHorizontal} from '../lib';

figma.connect(
    TrapezoidLeftLineHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22150%3A1623',
    {
        example: () => <TrapezoidLeftLineHorizontal />,
    },
);
