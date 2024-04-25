const BASE_URL = 'http://127.0.0.1:5000/api/v1'; // Your API base URL

const handleErrors = async (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    await handleErrors(response);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await handleErrors(response);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const putRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await handleErrors(response);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    await handleErrors(response);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
