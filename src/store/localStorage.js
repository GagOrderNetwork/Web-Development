import { hash } from "../util/hash";
import persistState from "redux-localstorage";
import config from "../config";

// State props to be stored...
const paths = ["data"];

// Name the key used in browser local storage
const key = `${hash(config.brand + "_" + config.stage)}`;

const localStorage = () => persistState(paths, { key });

export { localStorage };
