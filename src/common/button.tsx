import * as React from "react";

export interface IButtonProps {
    label?: string;
    className: string;
    onClick: () => void;
    disabled?: boolean;
    IconClassName?: string;
	divClassName?: string;
	style?: React.CSSProperties;
}

export const Button: React.StatelessComponent<IButtonProps> = (props) => {
	return (
		<button type="button"
			className={props.className}
			onClick={props.onClick}
			disabled={props.disabled}
			style={props.style}>
            {props.label}
        </button>
    );
};