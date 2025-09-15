import figma from '@figma/code-connect';

import {Smartphone} from '../lib';

figma.connect(
    Smartphone,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2307%3A78020',
    {
        example: () => <Smartphone />,
    },
);
