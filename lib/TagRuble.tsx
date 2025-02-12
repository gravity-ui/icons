import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const TagRuble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m7.182 2.94-4.87 4.869a1 1 0 0 0-.006 1.408l4.37 4.45a1 1 0 0 0 1.414.012l4.96-4.868a1.5 1.5 0 0 0 .45-1.07V3.5a1 1 0 0 0-1-1H8.243a1.5 1.5 0 0 0-1.061.44m6.92 6.942A3 3 0 0 0 15 7.741V3.5A2.5 2.5 0 0 0 12.5 1H8.243a3 3 0 0 0-2.122.879l-4.87 4.87a2.5 2.5 0 0 0-.015 3.519l4.37 4.45a2.5 2.5 0 0 0 3.535.032zm-3.908-5.844a.75.75 0 0 0-1.06 0L7.366 5.805l-.088-.088a.75.75 0 0 0-1.06 1.06l.087.09-.353.353-.088-.089a.75.75 0 0 0-1.061 1.061l.088.088-.353.354a.75.75 0 0 0 1.06 1.06l.354-.353 1.06 1.06a.75.75 0 1 0 1.061-1.06l-1.06-1.06.353-.354.796.795a2.375 2.375 0 0 0 3.358-3.358zm-.972 3.624-.795-.796L9.664 5.63l.796.795a.875.875 0 0 1-1.238 1.238"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(TagRuble);
export default ForwardRef;
