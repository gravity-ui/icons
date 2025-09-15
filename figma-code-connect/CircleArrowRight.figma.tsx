import figma from '@figma/code-connect';

import CircleArrowRight from '../lib/CircleArrowRight';

figma.connect(
    CircleArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5151%3A123',
    {
        example: () => <CircleArrowRight />,
    },
);
