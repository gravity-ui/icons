import * as React from 'react';
import type {SVGProps} from 'react';
const NutHex = (props: SVGProps<SVGSVGElement>) => (
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
            d="m13.874 8.25-2.72 4.712a.5.5 0 0 1-.434.25H5.28a.5.5 0 0 1-.433-.25L2.127 8.25a.5.5 0 0 1 0-.5l2.72-4.712a.5.5 0 0 1 .433-.25h5.44a.5.5 0 0 1 .433.25l2.72 4.712a.5.5 0 0 1 0 .5m1.3-1.25a2 2 0 0 1 0 2l-2.72 4.712a2 2 0 0 1-1.733 1H5.28a2 2 0 0 1-1.732-1L.828 9a2 2 0 0 1 0-2l2.72-4.712a2 2 0 0 1 1.732-1h5.44a2 2 0 0 1 1.732 1zM9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            clipRule="evenodd"
        />
    </svg>
);
export default NutHex;
