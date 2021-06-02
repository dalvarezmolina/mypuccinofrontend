import URL from './routes';

export const doLogin = (
  
  username,
  password
) => new Promise((resolve, reject) => {
  const data = new FormData();
  username && data.append('username', username);
  password && data.append('password', password);
  fetch(`${URL}/user/signin`, {
    method: 'POST',
    body: data,
  }).then((resultado) => {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
      //console.log(resultado)
    } else {
      resultado.json().then((res) => reject(res));
      //console.log('error de login')
    }
  }).catch((error) => reject(error));
});


export const doLogoff = (
  token,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/user/logoff/`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((resultado) => {
    resolve(resultado);
    //console.log(resultado)
  }).catch((error) => reject(error));
});

export const fetchSummary = (
  token,
  stations,
  dateinicio,
) => new Promise((resolve, reject) => {
  const datefinal = dateinicio;
  fetch(`${URL}/station/summary/?date_init=${dateinicio.getFullYear()}-${dateinicio.getMonth() + 1}-${dateinicio.getDate()}&date_final=${datefinal.getFullYear()}-${datefinal.getMonth() + 1}-${datefinal.getDate()}&station=${stations}`, {
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