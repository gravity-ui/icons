import figma from '@figma/code-connect';

import {QrCode} from '../lib';

figma.connect(
    QrCode,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A127',
    {
        example: () => <QrCode />,
    },
);
