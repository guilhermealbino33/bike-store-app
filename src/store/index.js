import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import { getSessionToken } from '@shopify/app-bridge-utils';
import axiosMiddleware from 'redux-axios-middleware';
import createApp from '@shopify/app-bridge';
import rootReducer from './rootReducer/reducer';

// Some reducer importing-----

const mainReducer = combineReducers({
    rootReducer
});

const client = axios.create();
const app = createApp({
    apiKey: process.env.SHOPIFY_API_KEY,
    host: new URL(location).searchParams.get("host"),
    forceRedirect: true,
});

client.interceptors.request.use(async function (config) {
    // requires a Shopify App Bridge instance
    const token = await getSessionToken(app)
    // Append your request headers with an authenticated token
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});

export const store = createStore(mainReducer, applyMiddleware(axiosMiddleware(client)))