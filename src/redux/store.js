<<<<<<< HEAD
// import { createStore, applyMiddleware } from "redux";
// // import logger from "redux-logger";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store;
=======
import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
>>>>>>> cf62a66d4bbf1cf1432b2423ee18368f1eaf18c6
