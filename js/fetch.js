// Ref: https://www.youtube.com/watch?v=23hrM4saaMk
// Dummy REST api: https://reqres.in/

const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

const sendRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {
      'Content-Type': 'application/json'
    } : {}
  }).then(res => {
    if (res.status >= 400) {
      return res.json().then(errResData => {
        const error = new Error('Something went wrong');
        error.data = errResData
        throw error;
      })
    }
    return res.json();
  });
}

const getData = () => {
  sendRequest('GET', 'https://reqres.in/api/users')
    .then(responseData => {
      console.log(responseData);
    })
};


const sendData = () => {
  sendRequest('POST', 'https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }).then(responseData => {
    console.log(responseData);
  }).catch(err => {
    console.log(err, err.data)
  })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);