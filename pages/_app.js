import "../assets/scss/style.scss";
import { Provider } from "react-redux";
import { useStore } from "../store";
import ScrollToTop from "../helpers/scroll-top";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Helmet from "react-helmet";
import Router from 'next/router';
import Head from 'next/head'
import {
  fetchProducts,
  fetchLingerie,
  fetchBrochures,
  fetchLookbooks,
  fetchPbanners,
  fetchSliders
} from "../redux/actions/productActions";
import client from "../constants/config";
import NProgress from 'nprogress';


import LoadingScreen from "../helpers/LoadingScreen";
import { Fragment } from "react";



Router.onRouteChangeStart = () => {
  // ;
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // ;
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // ;
  NProgress.done();
};


const App = ({ Component, pageProps }) => {
  const store=useStore(pageProps.initialReduxState);
let preloadedState
  var productMap = [];
  var lowerCords = [];
  var lingeries = [];
  var brochures = [];
  var lookbooks = [];
  var promotionBanners = [];
  var lpSliders = [];

  const fetchEntry = (contentType, limit, container) => {
    return Promise.resolve(
      client
        .getEntries({
          content_type: contentType,
          limit: limit
        })
        .then(function(entries) {
          entries.items.map(function(entry, i) {
            if (entry.fields) {
              // fetch products

              container[i] = entry.fields;
            }
          });
          container = [...new Set(container)];
        })
    );
  };

  fetchEntry("products", 600, productMap)
    .then(fetchEntry("lowerCoordinate", 100, lowerCords))
    .then(fetchEntry("lingerie", 100, lingeries))
    .then(fetchEntry("promotionBanner", 100, promotionBanners))
    .then(fetchEntry("brochures", 100, brochures))
    .then(fetchEntry("lookbook", 100, lookbooks))
    .then(fetchEntry("landingPageSliders", 100, lpSliders))
    .then(async () => {
      return Promise.resolve(
        (preloadedState = {
          productData: [productMap, lowerCords, lingeries].flat(),
          lingerieData: lingeries,
          brochuresData: brochures,
          lookbookData: lookbooks,
          pBannersData: promotionBanners,
          sliderData: lpSliders
        })
      );
    })
    .then(() => {
      store.dispatch(fetchProducts([productMap, lowerCords, lingeries].flat()));
      store.dispatch(fetchLingerie(lingeries));
      store.dispatch(fetchBrochures(brochures));
      store.dispatch(fetchLookbooks(lookbooks));
      store.dispatch(fetchPbanners(promotionBanners));
      store.dispatch(fetchSliders(lpSliders));
    }) .then(async () => {
      return Promise.resolve(
        (preloadedState = {
          productData: [productMap, lowerCords, lingeries].flat(),
          lingerieData: lingeries,
          brochuresData: brochures,
          lookbookData: lookbooks,
          pBannersData: promotionBanners,
          sliderData: lpSliders
        })
      );
    })
  return (
    <Provider store={store}>
      
        <ToastProvider placement="bottom-left">
          <BreadcrumbsProvider>
            <ScrollToTop>
              <Fragment>
            <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/assets/css/nprogress.css" />
      </Head>
      <Helmet
              htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
              titleTemplate="%s | Sana'a Kayum"
              titleAttributes={{ itemprop: "name", lang: "en" }}
            />
              
              <Component {...pageProps} />
              </Fragment>
            </ScrollToTop>
          </BreadcrumbsProvider>
        </ToastProvider>
      
    </Provider>
  );
};

export default App;
