import "../assets/scss/style.scss";
import { Provider } from "react-redux";
import { useStore } from "../store";
import ScrollToTop from "../helpers/scroll-top";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import Helmet from "react-helmet";
import {
  fetchProducts,
  fetchLingerie,
  fetchBrochures,
  fetchLookbooks,
  fetchPbanners,
  fetchSliders
} from "../redux/actions/productActions";
import client from "../constants/config";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import LoadingScreen from "../helpers/LoadingScreen";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function() {
    persistor.persist();
  });

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
    .then(() => {
      store.dispatch(fetchProducts([productMap, lowerCords, lingeries].flat()));
      store.dispatch(fetchLingerie(lingeries));
      store.dispatch(fetchBrochures(brochures));
      store.dispatch(fetchLookbooks(lookbooks));
      store.dispatch(fetchPbanners(promotionBanners));
      store.dispatch(fetchSliders(lpSliders));
    });
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <ToastProvider placement="bottom-left">
          <BreadcrumbsProvider>
            <ScrollToTop>
              <Helmet
                htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
                titleTemplate="%s | Sana'a Kayum"
                titleAttributes={{ itemprop: "name", lang: "en" }}
              />
              <Component {...pageProps} />
            </ScrollToTop>
          </BreadcrumbsProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  );
}
