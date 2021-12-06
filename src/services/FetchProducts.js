export const getAllProductsPage = async (page) => {

    const data = await fetch(`https://story-dots.herokuapp.com/api/products/${page}`);
    const products = await data.json();
    return products;

}


export const getProduct = async (id) => {

    const data = await fetch(`https://story-dots.herokuapp.com/api/product/${id}`);
    const product = await data.json();
    return product;

}

export const editProduct = async (id, product) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const response = await fetch(`https://story-dots.herokuapp.com/api/product/${id}`, {
            headers,
            method: "PUT",
            body: JSON.stringify(product)
        });

    return response;
}

export const addProduct = async (product) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const response = await fetch(`https://story-dots.herokuapp.com/api/product`, {
            headers,
            method: "POST",
            body: JSON.stringify(product)
        });


    return response;
}



export const deleteProduct = async(id) => {

    const response = await fetch(`https://story-dots.herokuapp.com/api/${id}`, {
            method: "DELETE"
        });

    return response;
}