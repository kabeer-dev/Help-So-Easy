/**
 * Adaptor for axios
 */

import AxiosMockAdapter from 'axios-mock-adapter';
import axios from './axios';

console.log('134234234');
const services = new AxiosMockAdapter(axios, { delayResponse: 0 });
export default services;
