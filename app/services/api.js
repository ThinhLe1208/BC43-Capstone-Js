export const getProducts = async () => {
  try {
    const promise = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET'
    });

    return promise.data.content;
  } catch (err) {
    console.log(err);
  }
};

export const getById = async (id) => {
  try {
    const promise = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: 'GET'
    });

    return promise.data.content;
  } catch (err) {
    console.log(err);
  }
};

export const getRegister = async (post) => {
  const promise = await axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: post,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logInApi = async (data) => {
  try {
    const promise = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: data,
    });

    return promise.data.content;
  } catch (err) {
    console.log(err);
  }
};

export const getProfileApi = async (accessToken) => {
  try {
    const promise = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/getProfile",
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return promise.data.content;
  } catch (err) {
    console.log(err);
  }
};

export const orderApi = async (email, data) => {
  try {
    const promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/order",
      method: 'POST',
      data: {
        "orderDetail": [
          ...data
        ],
        "email": email
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrderApi = async (id, accessToken) => {
  try {
    const promise = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/deleteOrder",
      method: 'POST',
      data: {
        orderId: id
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  } catch (err) {
    console.log(err);
  }
}


