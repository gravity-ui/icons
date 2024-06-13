import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.42 2.141a.75.75 0 1 0-1.061-1.06L8 4.439 4.646 1.086a.75.75 0 1 0-1.06 1.06L7.47 6.03a.75.75 0 0 0 1.06 0zM3.58 13.86a.75.75 0 0 0 1.061 1.06L8 11.561l3.354 3.353a.75.75 0 0 0 1.06-1.06L8.53 9.97a.75.75 0 0 0-1.06 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChevronsCollapseVertical;
