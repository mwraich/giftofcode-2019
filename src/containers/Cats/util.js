import axios from 'axios';

export const getCats = async => axios({
  method: 'GET',
  url: 'https://cmsback-sxbbrr2s2a-uc.a.run.app/cat'
});
