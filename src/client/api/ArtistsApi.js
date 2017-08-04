import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listArtists() {
        return axios.get(`${apiPrefix}/artists`);
    }
};