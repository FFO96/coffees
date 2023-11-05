import { Coffee, PostCoffee } from "@/types/Coffee";
import { ResponseResult } from "@/types/ResponseResult";
import { url } from "@/utils/urls";

export async function getCoffees(): Promise<ResponseResult<Coffee[]>> {
    try {
        const response = await fetch(url.coffees, { cache: 'no-store' });
        if (response.status === 200) {
            return { data: (await response.json()) as Coffee[] }
        } else {
            throw Error(`${response.statusText} with status code: ${response.status}`);
        }
    } catch (error: any) {
        return { error: { message: error.message } };
    };
}

export async function postCoffees(coffeeBody: PostCoffee): Promise<ResponseResult<Coffee>> {
    try {
        const response = await fetch(url.coffees, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(coffeeBody) });
        if (response.status === 201) {
            return { data: (await response.json()) as Coffee }
        } else if (response.status === 400) {
            const parsedResponse = await response.json();
            response as any;
            return { error: { message: parsedResponse.message[0] } }
        } else {
            throw Error(`${response.statusText} with status code: ${response.status}`);
        }
    } catch (error: any) {
        return { error: { message: error.message } };
    };
}