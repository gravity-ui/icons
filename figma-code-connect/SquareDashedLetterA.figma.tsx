import figma from '@figma/code-connect';

import SquareDashedLetterA from '../lib/SquareDashedLetterA';

figma.connect(
    SquareDashedLetterA,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A825',
    {
        example: () => <SquareDashedLetterA />,
    },
);
