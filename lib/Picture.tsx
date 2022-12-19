import * as React from 'react';
import {SVGProps} from 'react';
const Picture = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v4.805l.79-.719a1.75 1.75 0 0 1 2.415.058l.758.759 2.192-2.504a1.75 1.75 0 0 1 2.675.048L13 8.387V4.5A1.5 1.5 0 0 0 11.5 3Zm3 7.493V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v6.497a.56.56 0 0 0 0 .006v.497a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-1.007Zm-1.5.273-2.334-2.873a.25.25 0 0 0-.383-.007l-2.719 3.108-.527.603-.567-.567-1.326-1.325a.25.25 0 0 0-.345-.009L3 11.332v.168A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-.734ZM8 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Picture;
