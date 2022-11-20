import React, {FC} from "react";

export interface DateFieldProps {
    label: string,
    name: string,
    value: Date,
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
                   value={value.toString()}
                   onChange={onChange}
            />
        </label>
    </div>);
}