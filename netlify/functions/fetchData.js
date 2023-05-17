const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    // API token stored as a variable
    // const auth_token = '5e21833f-f5ea-4ce7-7a5c-2bfb537ca8bd';
    // API token stored as an environment variable
    const auth_token = process.env.JOBS_API_TOKEN;

    // Make API request and retrieve JSON data
    const response = await fetch('https://workml.io/v1/jobs', {
      headers: {
        Authorization: `Bearer ${auth_token}`
      }
    });
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
