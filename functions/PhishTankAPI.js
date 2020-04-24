import { Constants } from 'expo';
const BASE_URL = 'https://checkurl.phishtank.com/checkurl/index.php';


async function GetURLInformation(url) {
  try {
    const parameters = {
      url,
      format: 'json',
      app_key: Constants.manifest.extra.PhishTankKey
    }
    let formData = new FormData();

    for (let k in parameters) {
      formData.append(k, parameters[k]);
    }

    let response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    });
    console.log(response);
    return response;
  } catch(error) {
    console.error(error);
    return null;
  }
}
export { GetURLInformation };