import figma from '@figma/code-connect';

import CircleQuestionDot from '../lib/CircleQuestionDot';

figma.connect(
    CircleQuestionDot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13142%3A183',
    {
        example: () => <CircleQuestionDot />,
    },
);
