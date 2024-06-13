import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutTabs = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.999 3.5h.242c.559 0 1.049.37 1.202.907l.171.598A2.75 2.75 0 0 0 8.26 7h5.24v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V5a1.5 1.5 0 0 1 1.499-1.5m9.501 2h-1.242a1.25 1.25 0 0 1-1.201-.907l-.171-.598a3 3 0 0 0-.195-.495H12A1.5 1.5 0 0 1 13.5 5zM8.241 2H4a3 3 0 0 0-.457.035A3 3 0 0 0 2 2.764 3 3 0 0 0 1 5v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM7 3.5h1.242c.559 0 1.049.37 1.202.907l.171.598q.075.261.195.495H8.26a1.25 1.25 0 0 1-1.202-.907l-.171-.598A3 3 0 0 0 6.69 3.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default LayoutTabs;
