import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {apiGetQuestionnairesForUser} from "../../services/m3Api";

class AccountPage extends Component {

    constructor(props) {
        super(props);
        this.initialiseState();
    }

    initialiseState() {
        this.colorClasses = ['blue', 'green'];
        this.state = {
            selectedQuestionnaireId: -1,
            questionnaires: []
        }
    }

    getNextColorClass(index) {

        const resolvedIndex = index % this.colorClasses.length;

        return this.colorClasses[resolvedIndex]
    }

    componentDidMount(prevProps) {
        if (!this.state.ready) {
            this.loadQuestionnaires();
        }

    }

    loadQuestionnaires() {

        apiGetQuestionnairesForUser().then(
            json => this.setState(() => {
                return {
                    ready: true,
                    questionnaires: json,
                    selectedQuestionnaireId: this.state.selectedQuestionnaireId
                }
            })
        )

    };

    handleQuestionnaireClick(questionnaireId) {

        this.setState(() => {
            return {
                ready: true,
                questionnaires: this.state.questionnaires,
                selectedQuestionnaireId: questionnaireId
            }
        })

    }

    render() {

        let content;
        if (this.state.ready) {
            content = (<div className="row">
                {

                    this.state.questionnaires ? this.state.questionnaires.map((q, i) => {

                        const colorClass = this.getNextColorClass(i);
                        return (<div className="col-4">
                            <div className={"questionnaire-block " + colorClass} onClick={() => this.handleQuestionnaireClick(q.questionnaireId)}>
                                <h3>{q.description}</h3>
                            </div>
                        </div>);
                    }) : null
                }

                <div className="col-4 create-new">
                    Create New Questionnaire
                </div>

            </div>)
        } else {
            content = (<div>Loading...</div>)
        }


        return (
            <div className="account-page">

                <h2>My Questionnaires</h2>

                { content }

            </div>
        );

    }

}

const mapStateToProps = (state, ownProps) => {

    let props = {
        questionnaires: state.questionnaires.items
    };

    return props;
};


export default connect(
    mapStateToProps,
    null
)(AccountPage);