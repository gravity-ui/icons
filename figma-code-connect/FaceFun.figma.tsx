import figma from '@figma/code-connect';

import FaceFun from '../lib/FaceFun';

figma.connect(
    FaceFun,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77134',
    {
        example: () => <FaceFun />,
    },
);
