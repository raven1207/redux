/**
 * 定义TabBox的容器组件
 */
import {connect} from "react-redux";
import TabBox from 'components/TabBox';

export default connect(
    state => ({tabs: state.tabs})
)(TabBox)