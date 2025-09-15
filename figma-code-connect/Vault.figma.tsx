import figma from '@figma/code-connect';

import {Vault} from '../lib';

figma.connect(
    Vault,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A505',
    {
        example: () => <Vault />,
    },
);
