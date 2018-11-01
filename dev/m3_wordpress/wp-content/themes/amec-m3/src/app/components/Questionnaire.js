import React, {Component} from "react";
import PropTypes from "prop-types";
import ScrollToTop from "./ScrollToTop";

class Questionnaire extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

        if (!(this.props.contentReady || this.props.contentFetching)) {
            this.props.fetchQuestionnaireContent();
        }

        if (!(this.props.responsesReady || this.props.responsesFetching)) {
            this.props.fetchQuestionnaireResponses();
        }
    }

    render() {

        if (!this.props.componentReady) {

            return (<div>Loading Questionnaire...</div>)

        } else {

            return (<ScrollToTop>{
                this.props.pageComponent
            }</ScrollToTop>)
        }
    }
}

Questionnaire.propTypes = {
    contentReady: PropTypes.bool.isRequired,
    contentFetching: PropTypes.bool.isRequired,
    responsesReady: PropTypes.bool.isRequired,
    responsesFetching: PropTypes.bool.isRequired,
    componentReady: PropTypes.bool.isRequired,
    fetchQuestionnaireContent: PropTypes.func.isRequired,
    fetchQuestionnaireResponses: PropTypes.func.isRequired,
    pageComponent: PropTypes.object
};


export default Questionnaire