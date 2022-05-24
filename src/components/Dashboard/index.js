import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Dashboard } from "./Dashboard.jsx";
import {
  totalProductCount,
  publishedProductCount,
} from "../../store/rootReducer/selectors.js";
import {
  getAllCountProduct,
  getPublishedCountProduct,
} from "../../store/rootReducer/actions.js";

const mapDispatchToProps = {
  getAllCountProduct,
  getPublishedCountProduct,
};

const mapStateToProps = createStructuredSelector({
  totalProductCount,
  publishedProductCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
