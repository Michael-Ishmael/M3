import React, {Component} from 'react'
import moment from "moment"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class QuestionnaireBlock extends Component {

    constructor(props) {
        super(props);
        this.initialiseState(props);
    }

    initialiseState(props) {
        this.state = {
            newName: props.description,
            showEdit: false,
            firstEdit: false,
            showDelete: false
        }
    }

    componentDidUpdate() {
        if (this.state.showEdit && this.state.firstEdit) {
            this.setState({firstEdit: false});
            this.nameInput.focus();
            this.nameInput.select();
        }
    }


    handleNameChange(event) {
        this.setState({newName: event.target.value})
    }

    handleMarkDelete() {
        this.setState({showDelete: true})
    }

    handleMarkEdit() {
        this.setState({showEdit: true, firstEdit: true})
    }

    handleRename() {
        this.restoreView();
        this.props.onRename(this.props.questionnaireId, this.state.newName);
    }

    restoreView() {
        this.setState({showEdit: false, showDelete: false, firstEdit: false})
    }

    render() {

        if (this.state.showDelete) {

            return this.renderDelete();

        } else {

            return this.renderNormal();

        }

    }

    renderNormal() {


        return (<div className="col-4">
            <div className={"questionnaire-block " + this.props.colorClass}>

                {this.renderControls()}
                { this.renderCenter() }

            </div>
        </div>);

    }


    renderCenter() {

        let content = (<div className="questionnaire-block-main">
            {
                this.renderText()
            }
            {
                this.renderDate()
            }
        </div>);
        if (this.state.showEdit) {
            return content;
        } else {
            return (<Link to={"/m3/questionnaires/" + this.props.questionnaireId}>
                {content}
            </Link>)
        }

    }

    renderText() {
        if (this.state.showEdit) {
            return (<input type="text" className="form-control" placeholder="New questionnaire name"
                           title="Enter new name fore questionnaire" value={this.state.newName}
                           onChange={(event) => this.handleNameChange(event)}
                           ref={(input) => {
                               this.nameInput = input;
                           }}
            />);
        } else {
            return (
                <h4 title="Click to open questionnaire">{this.props.description}</h4>
            );
        }
    }

    renderDate() {
        const qDate = moment(this.props.timestamp).format('DD MMM YYYY, h:mm a');
        if (!this.state.showEdit) {
            return (
                <div className="questionnaire-date">
                    {qDate}
                </div>)
        } else {
            return null;
        }
    }

    renderControls() {

        if (this.state.showEdit) {
            return (
                <div className="questionnaire-controls">
                    <a className="top" title="Rename Questionnaire"
                       onClick={() => this.handleRename()}>
                        <i className="fas fa-save"/>
                    </a>
                    <a className="bottom" title="Cancel Rename"
                       onClick={() => this.restoreView()}>
                        <i className="fas fa-ban"/>
                    </a>
                </div>)
        } else {
            return (
                <div className="questionnaire-controls">
                    <a className="top" title="Rename Questionnaire"
                       onClick={() => this.handleMarkEdit()}>
                        <i className="fas fa-pencil-alt"/>
                    </a>
                    <a className="bottom" title="Delete Questionnaire"
                       onClick={() => this.handleMarkDelete()}>
                        <i className="fas fa-trash"/>
                    </a>

                </div>)
        }
    }

    renderDelete() {

        return (<div className="col-4">
                <div className={"questionnaire-block shake deletion " + this.props.colorClass}>

                    <p>Are you sure you want to delete?
                        <br/>
                        <span title={this.props.description} className="trunc">{this.props.description}</span>
                    </p>
                    <span className="text-link sml">
                                        <a onClick={() => this.props.onDelete(this.props.questionnaireId)}>Yes</a>
                                        <a onClick={() => this.restoreView()}>No</a>
                                    </span>

                </div>
            </div>
        );
    }


}

QuestionnaireBlock.propTypes = {
    index: PropTypes.number.isRequired,
    questionnaireId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    colorClass: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRename: PropTypes.func.isRequired,
};

export default QuestionnaireBlock;