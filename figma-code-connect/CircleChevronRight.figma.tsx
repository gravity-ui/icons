import figma from '@figma/code-connect';

import {CircleChevronRight} from '../lib';

figma.connect(
    CircleChevronRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5152%3A279',
    {
        example: () => <CircleChevronRight />,
    },
);
