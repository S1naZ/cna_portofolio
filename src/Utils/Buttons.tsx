import * as React from "react";

interface propsTypes {
    children?: React.ReactNode;
    style?: string;
    onClick?: () => void;
}

const HeaderButton =(props:propsTypes )=>{
    return (
        <button
            className={`flex items-center justify-center cursor-pointer transition hover:bg-gray-200 rounded-[6.8px] w-[40px] h-[40px]  ${props.style}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )

}
export default HeaderButton