import cookie from 'js-cookie';
import { TOKEN, BASE_URL } from './constants';

const config = () => ({
  APP_BASE_URL: `${window.location.origin}/#`,
  SERVER_BASE_URL: `${BASE_URL}`,
  HEADERS: {
    Authorization: cookie.get(TOKEN) && `Bearer ${cookie.get(TOKEN)}`
  }
});
export default config;
