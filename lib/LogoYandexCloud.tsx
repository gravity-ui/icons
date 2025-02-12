import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LogoYandexCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.5 8a5.5 5.5 0 0 1 5.492-5.5c1.318.032 1.88.796 2.02 1.48.027.137.02.389-.027.713a7 7 0 0 1-.042.26l-1.759.308h-.001c-.838.144-1.537.432-2.068.933-.535.504-.829 1.155-.98 1.887l-.444 2.146-.009.043-.02.098c-.034.168-.091.444-.132.725-.047.325-.09.763-.025 1.154A5.49 5.49 0 0 1 2.5 8m5.501 7a7 7 0 0 0 .002-14h-.006a7 7 0 0 0 .001 14zm.007-1.5c-1.318-.032-1.88-.796-2.02-1.48-.027-.137-.02-.389.027-.713a7 7 0 0 1 .042-.26l1.759-.308h.001c.838-.144 1.537-.432 2.068-.933.535-.504.829-1.155.98-1.887l.444-2.146.009-.043q.007-.04.02-.097c.034-.17.092-.445.132-.726.047-.325.09-.763.024-1.154A5.5 5.5 0 0 1 8.009 13.5M9.62 6.532l-1.18.207h-.002c-.652.112-1.044.31-1.295.547-.247.233-.43.57-.539 1.098L6.38 9.468l1.18-.207h.002c.652-.112 1.044-.31 1.295-.547.247-.233.43-.57.539-1.098z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LogoYandexCloud);
export default ForwardRef;
