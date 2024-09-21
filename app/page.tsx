"use client";
import Summary from "./components/Summary";
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import app from "./firebaseConfig"

export default function Home() {

  return (
    <Provider store={store}>
      <div>
        <h1>Weather App</h1>
        <Summary />
      </div>
    </Provider>
  );
};

