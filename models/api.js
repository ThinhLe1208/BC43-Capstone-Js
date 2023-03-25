export const getProducts = async () => {
    const promise = await axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    });

    console.log('api products : ', promise.data.content);
    return promise.data.content;
};

export const getById = async (id) => {
    const promise = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: 'GET'
    });

    console.log('api id : ', promise.data.content);
    return promise.data.content;
};