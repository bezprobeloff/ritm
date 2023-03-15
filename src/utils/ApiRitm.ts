import { BASE_URL_API_RITM, BASE_URL_TEST } from './constants';

interface IForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  policy: boolean;
}

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err: any) => {
    err.statusCode = res.status;
    return Promise.reject(err);
  });
};

export const getTest = async (): Promise<any> => {
  try {
    const res = await fetch(BASE_URL_TEST);
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendForm = async ({ name, phone, email, message, policy }: IForm): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL_API_RITM}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: name,
        userPhone: phone,
        userEmail: email,
        userMessage: message,
        policy: policy
      })
    });
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
