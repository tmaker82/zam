import { Demo } from '@/types';

export const ProductService = {

    getProducts() {
        return fetch('https://blog.tmaker82.ru/ghost/api/content/posts/?key=43ff9fe977cab0300d6ca0a2b3', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    },
};
