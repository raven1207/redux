/**
 * 定义Link的容器组件
 */
import {connect} from 'react-redux';
import Link from 'components/Link.js';
import {setVisibilityFilter} from 'actions/index';
const mapStateToprops = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
const mapDispatchProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})
export default connect(
    mapStateToprops,
    mapDispatchProps
)(Link)