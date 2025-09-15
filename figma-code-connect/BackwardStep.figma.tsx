import figma from '@figma/code-connect';

import BackwardStep from '../lib/BackwardStep';

figma.connect(
    BackwardStep,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=25891%3A1657',
    {
        example: () => <BackwardStep />,
    },
);
