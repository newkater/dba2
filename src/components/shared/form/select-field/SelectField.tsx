import React, {FC} from "react";

export interface SelectFieldOption {
    text: string,
    value: string
};

export interface SelectFieldProps {
    label: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    className?: string,
    options: SelectFieldOption[]
};

export const SelectField: FC<SelectFieldProps> = ({label, name, onChange, value, options}) => {
    return (<div>
        <label>
            {label}
            <select
                name={name}
                value={value}
                onChange={onChange}>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
            </select>
        </label>
    </div>);
};