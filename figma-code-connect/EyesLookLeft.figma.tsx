import figma from '@figma/code-connect';

import EyesLookLeft from '../lib/EyesLookLeft';

figma.connect(
    EyesLookLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A114',
    {
        example: () => <EyesLookLeft />,
    },
);
