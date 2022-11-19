import React, {FC} from "react";

export interface TextFieldProps {
    label: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    placeholder?: string
}

export const TextField: FC<TextFieldProps> = ({
                                                  label, name, className,
                                                  placeholder, value, onChange
                                              }) => {


    return (<div className={className || ""}>
        <label>
            {label}
            <input type="text"
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder || ""}
            />
        </label>
    </div>);
}