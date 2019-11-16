import axios from 'axios';

export const getCats = async => axios.get({
  method: 'GET',
  url: 'http://cmsback-sxbbrr2s2a-uc.a.run.app/cat'
});
