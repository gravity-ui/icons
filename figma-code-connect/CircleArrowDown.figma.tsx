import figma from '@figma/code-connect';

import CircleArrowDown from '../lib/CircleArrowDown';

figma.connect(
    CircleArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5151%3A118',
    {
        example: () => <CircleArrowDown />,
    },
);
