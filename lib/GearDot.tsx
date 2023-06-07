import * as React from 'react';
import {SVGProps} from 'react';
const GearDot = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fillRule="evenodd" clipRule="evenodd">
            <path
                fill="currentColor"
                d="M7.199 2A.199.199 0 0 0 7 2.199c0 1.808-1.958 2.939-3.524 2.034a.199.199 0 0 0-.272.073l-.8 1.388a.199.199 0 0 0 .072.271c1.566.905 1.566 3.165 0 4.07a.199.199 0 0 0-.073.271l.801 1.388a.199.199 0 0 0 .272.073C5.042 10.862 7 11.993 7 13.8c0 .11.089.199.199.199H8.8c.11 0 .199-.089.199-.199 0-1.808 1.958-2.939 3.524-2.034a.199.199 0 0 0 .271-.073l.802-1.388a.199.199 0 0 0-.073-.271c-1.303-.753-1.516-2.434-.665-3.5a.75.75 0 0 1 1.172.936.852.852 0 0 0 .243 1.265 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .938-.76 1.699-1.699 1.699H7.2c-.938 0-1.699-.76-1.699-1.699a.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.472 1.699 1.699 0 0 1-.622-2.32l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2c0-.94.76-1.7 1.699-1.7H9.3a.75.75 0 1 1 0 1.5H7.2Zm.8 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
            <path fill="#F33" d="M12.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </g>
    </svg>
);
export default GearDot;
