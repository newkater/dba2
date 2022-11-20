import React, {useState} from "react";

export function useForm<T> (data: T) {
    const [form, setForm] = useState<T>(data);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return {form, handleChange};
}