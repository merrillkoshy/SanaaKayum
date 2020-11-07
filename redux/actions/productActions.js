export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_BROCHURES_SUCCESS = "FETCH_BROCHURES_SUCCESS";
export const FETCH_LOOKBOOKS_SUCCESS = "FETCH_LOOKBOOKS_SUCCESS";
export const FETCH_BANNERS_SUCCESS = "FETCH_BANNERS_SUCCESS";
export const FETCH_LINGERIE_SUCCESS = "FETCH_LINGERIE_SUCCESS";
export const FETCH_SLIDERS_SUCCESS = "FETCH_SLIDERS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});
const fetchLingerieSuccess = lingerie => ({
  type: FETCH_LINGERIE_SUCCESS,
  payload: lingerie
});
const fetchBrochuresSuccess = brochures => ({
  type: FETCH_BROCHURES_SUCCESS,
  payload: brochures
});

const fetchLookbooksSuccess = lookbooks => ({
  type: FETCH_LOOKBOOKS_SUCCESS,
  payload: lookbooks
});
const fetchPbannersSuccess = pBanners => ({
  type: FETCH_BANNERS_SUCCESS,
  payload: pBanners
});

const fetchSlidersSuccess = sliders => ({
  type: FETCH_SLIDERS_SUCCESS,
  payload: sliders
});
// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};
export const fetchLingerie = lingerie => {
  return dispatch => {
    dispatch(fetchLingerieSuccess(lingerie));
  };
};
export const fetchBrochures = brochures => {
  return dispatch => {
    dispatch(fetchBrochuresSuccess(brochures));
  };
};
export const fetchLookbooks = lookbooks => {
  return dispatch => {
    dispatch(fetchLookbooksSuccess(lookbooks));
  };
};
export const fetchPbanners = pBanners => {
  return dispatch => {
    dispatch(fetchPbannersSuccess(pBanners));
  };
};
export const fetchSliders = sliders => {
  return dispatch => {
    dispatch(fetchSlidersSuccess(sliders));
  };
};
