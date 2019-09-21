// Ref: https://youtu.be/qM4G1Ai2ZpE
// Dummy REST api: https://reqres.in/

const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

const getData = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
};
const sendData = () => {
  axios.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);