import axios from 'axios';
import { config } from './Helpers';

export const axiosGet = (signal) =>
  axios
    .get(config.API_GATEWAY, {
      signal,
    })
    .then((res) => {
      return res.data;
    });

export const getHotels = (signal) => axiosGet(signal);
