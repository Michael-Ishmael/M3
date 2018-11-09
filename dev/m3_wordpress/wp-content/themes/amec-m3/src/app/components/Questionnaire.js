import React, {Component} from "react";
import PropTypes from "prop-types";
import ScrollToTop from "./ScrollToTop";
import LoaderSpinner from "./LoaderSpinner";

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

        const loader = (<div className="page-loader">
            <LoaderSpinner size={20}/></div>);

        if (this.props.pageLookup.redirectRequired === true) {
            if (this.props.pageLookup.redirectFunc)
                this.props.pageLookup.redirectFunc(this.props.pageLookup.redirectIndex);
            return (loader)
        }

        if (!this.props.componentReady) {

            return (loader)

        } else {

            return (<ScrollToTop>{
                this.props.pageLookup.pageComponent
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
    pageLookup: PropTypes.shape({
        pageFound: PropTypes.bool.isRequired,
        redirectRequired: PropTypes.bool.isRequired,
        redirectIndex: PropTypes.number.isRequired,
        redirectFunc: PropTypes.func,
        pageComponent: PropTypes.object
    }).isRequired

};


export default Questionnaire