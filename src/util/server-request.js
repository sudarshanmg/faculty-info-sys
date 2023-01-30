export async function postRequest(body, route) {
  try {
    const response = await fetch(`http://localhost:3001${route}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;

  } catch (error) {
    throw new Error(error);
  }
}
