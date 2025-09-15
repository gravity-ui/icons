import figma from '@figma/code-connect';

import CopyPicture from '../lib/CopyPicture';

figma.connect(
    CopyPicture,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1018',
    {
        example: () => <CopyPicture />,
    },
);
