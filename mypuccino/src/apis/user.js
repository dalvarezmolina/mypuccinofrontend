import URL from './routes';

export const fetchUsers = (
  token,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/users/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((resultado) => {
    if (resultado.ok) {
      resultado.json().then((res) => resolve({
        response: res
      }));
    } else if (resultado.status === 401) {
      resultado.json().then((res) => resolve({
        response: res,
        logout: true,
      }));
    } else {
      resultado.json().then((error) => reject(error));
    }
  }).catch((error) => reject(error));
});