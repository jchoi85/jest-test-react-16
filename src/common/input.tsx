import * as React from "react";

export interface IInputProps {
    type?: string;
    name: string;
    label?: string;
    placeholder?: string;
    value: any;
    onChange: (fieldName: string, value: any) => void;
    error?: string;
	required?: boolean;
    onBlur?: (fieldName: string, value: any) => void;
	className?: string;
    onEnter?: () => void;
    id?: string;
	style?: React.CSSProperties;
}

export const Input: React.StatelessComponent<IInputProps> = (props) => {
    return (
        <div className={formatWrapperClass(props)}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
				<input type={props.type} required={props.required}
					name={props.name}
					className={props.className ? (props.className + "form-control") : "form-control"}
					placeholder={props.placeholder}
					value={props.value}
					onChange={onChangeInput(props)}
					onBlur={onBlur(props)}
					onKeyPress={onKeyPress(props)}
					style={props.style}
                />
            </div>
            <div className="help-block">{props.error}</div>
        </div>
    );
}

const formatWrapperClass = (props: IInputProps) => {
    const wrapperClass = 'form-group';
    return props.error ? `${wrapperClass} has-error` : wrapperClass;
}

const onChangeInput = (props: IInputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value);
}

const onBlur = (props: IInputProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
	if (props.onBlur) {
		props.onBlur(e.target.name, e.target.value);
	}
}

const onKeyPress = (props: IInputProps) => (e: React.KeyboardEvent<HTMLInputElement>) => {
	if (props.onEnter) {
		if (e.key === 'Enter') {
			props.onEnter();
		}
	}
}