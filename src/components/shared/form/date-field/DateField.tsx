import React, {FC} from "react";

export interface DateFieldProps {
    label: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
}

export const DateField: FC<DateFieldProps> = ({
                                                  label, name, className,
                                                  value, onChange
                                              }) => {


    return (<div className={className || ""}>
        <label>
            {label}
            <input type="date"
                   name={name}
                   value={value}
                   onChange={onChange}
            />
        </label>
    </div>);
}