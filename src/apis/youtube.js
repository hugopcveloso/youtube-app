import axios from 'axios';

const KEY = 'AIzaSyBLRfDVLyLqIDW0nZhfXAX0tOuhsFjgmgs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
