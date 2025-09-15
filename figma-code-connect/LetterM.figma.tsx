import figma from '@figma/code-connect';

import LetterM from '../lib/LetterM';

figma.connect(
    LetterM,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7555%3A639',
    {
        example: () => <LetterM />,
    },
);
