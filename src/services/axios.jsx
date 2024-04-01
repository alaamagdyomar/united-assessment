import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockDataCats from './mockDataCats';
import mockDataDogs from './mockDataDogs';
import mockDataHorses from './mockDataHorses';

const mock = new MockAdapter(axios);

mock.onGet('/api/cats').reply(200, mockDataCats);

mock.onGet('/api/dogs').reply(200, mockDataDogs);

mock.onGet('/api/horses').reply(200, mockDataHorses);

export default mock;
