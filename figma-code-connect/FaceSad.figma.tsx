import figma from '@figma/code-connect';

import FaceSad from '../lib/FaceSad';

figma.connect(
    FaceSad,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77146',
    {
        example: () => <FaceSad />,
    },
);
