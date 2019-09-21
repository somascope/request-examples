// Ref: https://www.youtube.com/watch?v=4K33w-0-p2c
// Dummy REST api: https://reqres.in/

const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

const sendXHR = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject('Something went wrong!');
    }

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

const getData = () => {
  sendXHR('GET', 'https://reqres.in/api/users').then(res => {
    console.log(res);
  });
};

const sendData = () => {
  sendXHR('POST', 'https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);