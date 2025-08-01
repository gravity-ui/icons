import * as React from 'react';
import type {SVGProps} from 'react';
const BellDot = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fillRule="evenodd" clipRule="evenodd">
            <path
                fill="currentColor"
                d="M8 2.5a2.77 2.77 0 0 0-2.716 2.226l-.619 3.096a4.77 4.77 0 0 1-1.305 2.44l-.194.193a.566.566 0 0 0 .273.953l.821.19a16.6 16.6 0 0 0 7.48 0l.82-.19a.567.567 0 0 0 .274-.953l-.194-.193a4.77 4.77 0 0 1-1.305-2.44l-.068-.337a.75.75 0 0 1 1.471-.295l.068.338c.126.634.438 1.216.895 1.673l.194.194a2.066 2.066 0 0 1-.997 3.475l-.821.19q-1.053.24-2.12.358a2 2 0 0 1-3.913 0 18 18 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673l.62-3.096a4.27 4.27 0 0 1 5.4-3.256.75.75 0 1 1-.427 1.438A2.8 2.8 0 0 0 8 2.5"
            />
            <path fill="#f33" d="M12.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        </g>
    </svg>
);
export default BellDot;
