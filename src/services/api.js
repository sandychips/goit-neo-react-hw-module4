import axios from 'axios';

const API_KEY = '5yKAhFPvgHu4n3MP8l-bytIKff10dUbs30tSNf0qlLc'; // Cвій ключ
const BASE_URL = 'https://api.unsplash.com/search/photos';

export default async function fetchImages(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
}
