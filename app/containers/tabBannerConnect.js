/**
 * 定义tabBannert的容器组件
 */
import {connect} from "react-redux"
import TabBanner from "components/tabsBanner";
import {toggleTab} from "actions/index";

export default connect(
    state => ({tabs: state.tabs}),
    dispatch => ({
        toggleTab: (id) => dispatch(toggleTab(id))
    })
)(TabBanner)