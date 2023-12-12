import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/scss/style.scss";
import { Provider } from 'react-redux';
import PersistProvider from './store/providers/persist-provider';
import { store } from './store/store';
import { setProducts } from './store/slices/product-slice';
import products from "./data/products.json";

import 'animate.css';
import 'swiper/swiper-bundle.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";



store.dispatch(setProducts(products))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistProvider>
      <App />
    </PersistProvider>
  </Provider>
);

