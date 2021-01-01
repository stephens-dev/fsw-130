// import React from 'react';
import store from './redux'
import { addEmail, removeEmail, getEmails } from './redux/email'
import {addName, removeName, getNames} from './redux/name.js'
import { addPhone, removePhone, getPhones } from './redux/phone'
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {Provider} from 'react-redux'

store.dispatch(addName("joe"))
store.dispatch(addPhone("205-333-4455"))
store.dispatch(addEmail("blablabla@gmail.com"))

store.dispatch(addName("fred"))
store.dispatch(addPhone("205-444-5566"))
store.dispatch(addEmail("dodadoda@gmail.com"))

store.dispatch(removePhone("205-444-5566"))
store.dispatch(removeEmail("dodadoda@gmail.com"))
store.dispatch(removeName("fred"))
store.dispatch(getNames())
store.dispatch(getEmails())
store.dispatch(getPhones())


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
