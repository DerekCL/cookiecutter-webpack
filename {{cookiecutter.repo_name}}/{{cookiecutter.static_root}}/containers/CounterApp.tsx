import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Counter from "@src/components/Counter/Counter";
import * as CounterActions from "@src/ducks/app/actions";

const { Component, PropTypes } = React;

class CounterApp extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        value: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div>
                <Counter value={this.props.value} {...this.props.actions} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        value: state.counter,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterApp);
