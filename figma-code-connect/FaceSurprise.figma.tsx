import figma from '@figma/code-connect';

import FaceSurprise from '../lib/FaceSurprise';

figma.connect(
    FaceSurprise,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77153',
    {
        example: () => <FaceSurprise />,
    },
);
