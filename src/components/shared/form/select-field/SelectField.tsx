import React, {FC} from "react";

export interface SelectFieldProps {
    label: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    className?: string,
    options: string[][]
};

export const SelectField: FC<SelectFieldProps> = ({label, name, onChange, value, options}) => {
    return (<div>
        <label>
            {label}
            <select
                name={name}
                value={value}
                onChange={onChange}>
                {options.map(opt => <option key={opt[0]} value={opt[0]}>{opt[1]}</option>)}
            </select>
        </label>
    </div>);
};