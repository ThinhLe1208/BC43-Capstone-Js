const getProducts = async () => {
  const promise = await axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  console.log("api products : ", promise.data.content);
  return promise.data.content;
};

const getById = async (id) => {
  const promise = await axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });

  console.log("api id : ", promise.data.content);
  return promise.data.content;
};

const getRegister = async (post) => {
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
