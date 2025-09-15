import figma from '@figma/code-connect';

import {Briefcase} from '../lib';

figma.connect(
    Briefcase,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85175',
    {
        example: () => <Briefcase />,
    },
);
