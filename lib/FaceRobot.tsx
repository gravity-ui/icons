import * as React from 'react';
import {SVGProps} from 'react';
const FaceRobot = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15.5 10.071c0-2.582-1.426-4.853-3.633-6.087l1.039-1.87a.75.75 0 1 0-1.312-.728l-1.11 1.997A8.1 8.1 0 0 0 8 3a8.1 8.1 0 0 0-2.485.383l-1.11-1.997a.75.75 0 1 0-1.31.728l1.038 1.87C1.926 5.218.5 7.489.5 10.07c0 .813.169 1.603.614 2.294.448.697 1.09 1.158 1.795 1.46C4.227 14.39 6.02 14.5 8 14.5s3.773-.11 5.09-.675c.707-.302 1.348-.763 1.796-1.46.446-.691.614-1.481.614-2.294Zm-13.5 0C2 12.5 4 13 8 13s6-.5 6-2.929c0-3-2.5-5.571-6-5.571s-6 2.57-6 5.57Zm8.5 1.179a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm-5.75-.75a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0v1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FaceRobot;
