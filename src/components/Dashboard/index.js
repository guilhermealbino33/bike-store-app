import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Dashboard } from "./Dashboard.jsx";
import {
  totalProductCount,
  publishedProductCount,
  allLocations,
} from "../../store/rootReducer/selectors.js";
import {
  getAllCountProduct,
  getPublishedCountProduct,
  getAllLocations,
} from "../../store/rootReducer/actions.js";

const mapDispatchToProps = {
  getAllCountProduct,
  getPublishedCountProduct,
  getAllLocations,
};

const mapStateToProps = createStructuredSelector({
  totalProductCount,
  publishedProductCount,
  allLocations,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
