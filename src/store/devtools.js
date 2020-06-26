import { compose } from 'redux';
import config from '../config';

// Devtools
const composer =
	config.stage !== 'prod'
		? // Only enabled in non-production environments...
		  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

export { composer as compose };
