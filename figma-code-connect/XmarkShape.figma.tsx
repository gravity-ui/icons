import figma from '@figma/code-connect';

import XmarkShape from '../lib/XmarkShape';

figma.connect(
    XmarkShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A50',
    {
        example: () => <XmarkShape />,
    },
);
