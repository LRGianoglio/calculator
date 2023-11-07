// store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Opcional: middleware para manejar acciones asincrónicas
import todoReducer from './reducer';

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
