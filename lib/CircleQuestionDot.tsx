import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleQuestionDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g fillRule="evenodd" clipRule="evenodd">
            <path
                fill="currentColor"
                d="M2.5 8a5.5 5.5 0 0 1 6.38-5.43.75.75 0 0 0 .24-1.48 7 7 0 1 0 5.792 5.792.75.75 0 1 0-1.482.237q.07.43.07.881a5.5 5.5 0 1 1-11 0m3.94-3.46c.43-.354.994-.565 1.56-.565 1.217 0 2.34.82 2.34 2.14 0 .377-.079.745-.298 1.1-.208.339-.513.614-.875.867-.217.153-.326.257-.379.328-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 1 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            />
            <path fill="#F33" d="M12.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        </g>
    </svg>
);
const ForwardRef = forwardRef(CircleQuestionDot);
export default ForwardRef;
