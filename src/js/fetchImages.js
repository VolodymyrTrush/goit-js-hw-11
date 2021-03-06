import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27183497-70bd3599297502793f5a9350a';

export const fetchPicsOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

export const fetchPics = async params => {
  try {
    return await axios.get(BASE_URL, { params: { ...params, key: API_KEY } });
  } catch (error) {
    console.error(error);
  }
};
