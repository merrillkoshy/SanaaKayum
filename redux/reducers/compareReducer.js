import clientMgr from "../../constants/contentManager";

import {
  ADD_TO_COMPARE,
  DELETE_FROM_COMPARE,
  RESET_COMPARE,
  LOAD_COMPARE_FROM_PROFILE
} from "../actions/compareActions";

const initState = [];

const atc = (uID, finalCompare) => {
  clientMgr
    .then(environment => environment.getEntry(uID))

    .then(entry => {
      entry.fields.compareData["en-US"] = finalCompare;
      return entry.update();
    })
    .then(entry => entry.publish());
};

const compareReducer = (state = initState, action) => {
  const compareItems = state,
    product = action.payload;

  const atcOps = () => {
    const compareItem = compareItems.filter(
      item => item.serialNumber === product.serialNumber
    )[0];
    if (compareItem === undefined) {
      return [...compareItems, product];
    } else {
      return compareItems;
    }
  };

  const dfcOps = () => {
    const remainingItems = (compareItems, product) =>
      compareItems.filter(
        compareItem => compareItem.serialNumber !== product.serialNumber
      );
    console.log(compareItems);
    return remainingItems(compareItems, product);
  };

  if (action.type === ADD_TO_COMPARE) {
    const finalCompare = atcOps();
    atc(product.uID, finalCompare);
    return finalCompare;
  }

  if (action.type === DELETE_FROM_COMPARE) {
    var remCompare = dfcOps();
    console.log(product.serialNumber);
    console.log(remCompare);
    remCompare.length
      ? atc(product.uID, remCompare)
      : atc(product.uID, [
          {
            unNull: "unNull"
          }
        ]);

    return remCompare;
  }

  if (action.type === LOAD_COMPARE_FROM_PROFILE) {
    return product;
  }

  if (action.type === RESET_COMPARE) {
    return initState;
  }

  return compareItems;
};

export default compareReducer;
