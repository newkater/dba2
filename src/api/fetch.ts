const parseResponse = <TResponse>(text: string) => {
    return (text.length > 0 ? JSON.parse(text) : {}) as TResponse;
}

export const Get = async <TResponse>(url: string): Promise<TResponse> => {
    const options: RequestInit = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer"
    };

    const response = await fetch(url, options);
    return parseResponse<TResponse>(await response.text());
}

export const Put = async <TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> => {
    const options: RequestInit = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    };

    const response = await fetch(url, options);
    return parseResponse<TResponse>(await response.text());
}

export const Post = async <TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> => {
    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    };

    const response = await fetch(url, options);
    return parseResponse<TResponse>(await response.text());
}

export const Delete = async <TResponse>(url: string): Promise<TResponse> => {
    const options: RequestInit = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer"
    };

    const response = await fetch(url, options);
    return parseResponse<TResponse>(await response.text());
}

export const Patch = async <TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> => {
    const options: RequestInit = {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    };

    const response = await fetch(url, options);
    return parseResponse<TResponse>(await response.text());
}