import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverviewComponent from './collections-overview.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverviewComponent);

export default CollectionsOverviewContainer;
