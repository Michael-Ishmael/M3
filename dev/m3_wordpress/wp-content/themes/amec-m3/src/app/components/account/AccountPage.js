import React, {Component} from 'react'
import QuestionnaireBlock from "./QuestionnaireBlock";
import NewQuestionnaireForm from "./NewQuestionnaireForm";
import PropTypes from "prop-types";

const colorClasses = ['blue', 'green', 'purple', 'mustard'];

class AccountPage extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {

        this.state = {
            ready: !this.props.shouldFetch && this.props.questionnaires,
            showNew: false,
        }
    }

    static getNextColorClass(index) {

        const resolvedIndex = index % colorClasses.length;
        return colorClasses[resolvedIndex]
    }


    handleExitStartNew() {
        this.setState({showNew: false})
    }

    createNewQuestionnaireClick() {
        this.setState({showNew: true})
    }

    renderStartBlock() {
        return (<div className="col-4 create-new">
            <div className="questionnaire-block orange"
                 onClick={() => this.createNewQuestionnaireClick()}>
                <h3>
                    <i className="fas fa-file-alt"/>
                    <span>Start new questionnaire...</span>

                </h3>

            </div>
        </div>)
    }

    render() {

        if(this.props.shouldRedirectToCreated){
            this.props.redirectFunc(this.props.redirectUrl);
            return null
        }

        let content;
        if (this.props.ready) {

            if (this.state.showNew) {

                return (<NewQuestionnaireForm
                    onCreate={(newQuestionnaireName) => this.props.createNewQuestionnaire(newQuestionnaireName)}
                    onExit={() => this.handleExitStartNew()}
                />);

            } else {

                const greaterThan5 = this.props.questionnaires && this.props.questionnaires.length > 5;
                const preStartBlock = greaterThan5 ? this.renderStartBlock() : null;
                const postStartBlock = greaterThan5 ? null : this.renderStartBlock();

                let questionnaires = this.props.questionnaires ? this.props.questionnaires.map((q, i) => {
                    let colorClass = AccountPage.getNextColorClass(i);
                    return {...q, index: i, colorClass}
                }) : [];

                content = (<div className="row">

                    {preStartBlock}

                    {

                        questionnaires.map(q => (
                            <QuestionnaireBlock key={q.questionnaireId} {...q}
                                                onDelete={(questionnaireId) => this.props.deleteQuestionnaire(questionnaireId)}
                                                onRename={(questionnaireId, newName) => this.props.renameQuestionnaire(questionnaireId, newName)}

                            />
                        ))
                    }

                    {postStartBlock}


                </div>)
            }
        } else {
            if(this.props.shouldFetch){

                this.props.getAccountQuestionnaires();

            }
            content = (<div>Loading...</div>)
        }

        return (
            <div className="account-page">

                <h2>My Questionnaires</h2>
                {/*<a onClick={() => this.props.logout()} >Log out (temp)</a>*/}

                <div className="questionnaire-list">

                    {content}

                </div>
            </div>
        );

    }

}

AccountPage.propTypes = {
    questionnaires: PropTypes.arrayOf(PropTypes.shape({
        questionnaireId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
    })).isRequired,
    shouldRedirectToCreated: PropTypes.bool.isRequired,
    shouldFetch: PropTypes.bool.isRequired,
    ready: PropTypes.bool.isRequired,
    redirectUrl: PropTypes.string,
    redirectFunc: PropTypes.func,
    getAccountQuestionnaires: PropTypes.func.isRequired,
    createNewQuestionnaire: PropTypes.func.isRequired,
    renameQuestionnaire: PropTypes.func.isRequired,
    deleteQuestionnaire: PropTypes.func.isRequired,

};

export default AccountPage;