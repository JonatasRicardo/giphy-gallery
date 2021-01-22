import axios from 'axios';
import config from '../config';

const {
  GIPHY_URL,
  GIPHY_KEY
} = config;

export const getGifs = ({
  limit = 50
} = {}) => axios.get(`${GIPHY_URL}`, {
  params: {
    api_key: GIPHY_KEY,
    limit
  }
});
