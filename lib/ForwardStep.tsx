import * as React from 'react';
import type {SVGProps} from 'react';
const ForwardStep = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            d="M13.75 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M1.505 3.632C1.597 2.32 3.079 1.56 4.206 2.295l6.498 4.24a1.75 1.75 0 0 1 0 2.93l-6.498 4.24-.11.066c-1.111.62-2.502-.134-2.591-1.404l-.005-.129V3.761zM3 12.238c0 .199.22.319.387.21L9.884 8.21a.25.25 0 0 0 0-.419L3.387 3.552A.25.25 0 0 0 3 3.76z"
        />
    </svg>
);
export default ForwardStep;
