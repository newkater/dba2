import React, {FC} from "react";

export interface NumberFieldProps {
    label: string,
    name: string,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    placeholder?: string,
    max?: number,
    min?: number,
    step?: number,
    readonly?: boolean
}

export const NumberField: FC<NumberFieldProps> = ({
                                                      label, name, className,
                                                      placeholder, value, onChange,
                                                      min, max, step, readonly = false
                                                  }) => {


    return (<div className={className || ""}>
        <label>
            {label}
            <input type="number"
                   disabled={readonly}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder || ""}
                   min={min}
                   max={max}
                   step={step}
            />
        </label>
    </div>);
}