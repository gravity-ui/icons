import * as React from 'react';
import type {SVGProps} from 'react';
const Droplet = (props: SVGProps<SVGSVGElement>) => (
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
            fillRule="evenodd"
            d="M12.5 9a4.5 4.5 0 1 1-9 0c0-1.638.761-3.242 1.789-4.64a16.6 16.6 0 0 1 2.714-2.847c.591.48 1.722 1.483 2.707 2.817 1.024 1.389 1.79 3 1.79 4.67M14 9A6 6 0 0 1 2 9C2 4.819 5.846 1.337 7.106.309 7.359.102 7.676 0 8.003 0c.323 0 .637.1.888.302C10.148 1.312 14 4.759 14 9m-6 3.25a.75.75 0 0 1 0-1.5A1.75 1.75 0 0 0 9.75 9a.75.75 0 0 1 1.5 0A3.25 3.25 0 0 1 8 12.25"
            clipRule="evenodd"
        />
    </svg>
);
export default Droplet;
