// lib/api.js
export async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  }
  