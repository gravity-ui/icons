import * as React from 'react';
import {SVGProps} from 'react';
const Cherry = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.71.058c-1.62.676-2.758 1.724-3.414 3.04l-.033.066a6.542 6.542 0 0 0-.624 2.516c-.026.493-.005.998.058 1.51l.002.01.002.016A4.002 4.002 0 0 0 5 15a3.985 3.985 0 0 0 3.317-1.764c.038-.056.075-.114.11-.173A4.002 4.002 0 0 0 11 14a4 4 0 1 0-1.391-7.752 4.105 4.105 0 0 1-.747-.327 3.322 3.322 0 0 1-.423-.285 2.792 2.792 0 0 1-.818-1.039c-.303-.67-.355-1.519-.048-2.477.13.362.292.693.48.995a4.52 4.52 0 0 0 2.006 1.753c.3.137.615.243.941.322a6.44 6.44 0 0 0 1.062.163c.36.025.728.024 1.1 0l.024-.002a9.551 9.551 0 0 0 .937-.111.75.75 0 0 0 .617-.863 5.859 5.859 0 0 0-.267-1.032 4.559 4.559 0 0 0-.965-1.59 4.662 4.662 0 0 0-1.22-.918C11.068.191 9.553.001 8.018 0a.752.752 0 0 0-.307.058Zm1.605 2.247a3.028 3.028 0 0 0 1.113 1.072l.02.01c.227.125.476.226.745.303.546.156 1.174.212 1.87.166a2.951 2.951 0 0 0-1.238-1.555 3.594 3.594 0 0 0-.238-.138 4.458 4.458 0 0 0-.707-.296C10.33 1.69 9.7 1.582 9 1.533a10.43 10.43 0 0 0-.045-.003 4.328 4.328 0 0 0 .028.08c.094.258.205.489.332.695ZM5.867 3.363c0 .2.011.399.036.594a4.367 4.367 0 0 0 .365 1.29 4.204 4.204 0 0 0 .679 1.035c.215.243.46.463.731.659.14.1.288.195.442.283a4.016 4.016 0 0 0-.548.713 3.999 3.999 0 0 0-2.387-.933 7.487 7.487 0 0 1-.055-.694 6.515 6.515 0 0 1 .009-.591 5.04 5.04 0 0 1 .466-1.886l.008-.016a4.337 4.337 0 0 1 .254-.454ZM8.608 9.27a3.98 3.98 0 0 1 .365 2.193 2.5 2.5 0 1 0 .229-3.201l-.002.002a2.48 2.48 0 0 0-.592 1.006ZM7.5 11.037V11a2.5 2.5 0 1 0 0 .037Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default Cherry;
