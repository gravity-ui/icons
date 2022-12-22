import * as React from 'react';
import {SVGProps} from 'react';
const Crown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16 5.768v.028c0 .135-.015.27-.046.403l-1.3 5.631a1.402 1.402 0 0 1-.778.958 14.021 14.021 0 0 1-11.752 0 1.402 1.402 0 0 1-.779-.958L.046 6.2A1.796 1.796 0 0 1 0 5.795v-.028a1.768 1.768 0 0 1 3.018-1.25l.76.76.024.024.374.374.415.415c.182.182.493.1.561-.149l1.447.395c-.37 1.36-2.072 1.812-3.068.815L1.957 5.578a.268.268 0 0 0-.457.19v.028c0 .022.003.044.008.066l1.288 5.584a12.522 12.522 0 0 0 10.408 0l1.288-5.584a.291.291 0 0 0 .008-.066v-.028a.268.268 0 0 0-.457-.19l-1.574 1.574-1.06-1.06.415-.416.374-.374.024-.024.76-.76A1.768 1.768 0 0 1 16 5.768Zm-4.591.323a.335.335 0 0 1-.561-.149l-.155-.566-.139-.51-.009-.033-.65-2.386a1.964 1.964 0 0 0-3.79 0l-.65 2.386-.01.032-.139.511-.154.566 1.447.395.953-3.495a.464.464 0 0 1 .896 0L9.4 6.337c.37 1.36 2.072 1.812 3.068.815l-1.06-1.06ZM8.399 11.3l.901-1.2a1 1 0 0 0 0-1.2l-.9-1.2a.5.5 0 0 0-.8 0l-.9 1.2a1 1 0 0 0 0 1.2l.9 1.2a.5.5 0 0 0 .8 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Crown;
