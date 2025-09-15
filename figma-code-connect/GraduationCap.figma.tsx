import figma from '@figma/code-connect';

import {GraduationCap} from '../lib';

figma.connect(
    GraduationCap,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79309',
    {
        example: () => <GraduationCap />,
    },
);
