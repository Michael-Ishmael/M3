import {ResponseActions} from "../actions";


const responses = (state = {}, action) => {
    let response;
    switch (action.type) {
        case ResponseActions.MULTIPLE_ANSWER_RESPONSE:
            if(state.hasOwnProperty(action.questionId)){
                response = state[action.questionId]
                //TODO: Finish logic here
            } else {
                if(action.added){
                    response = {type: "MULTIPLE_ANSWER", answerIds: [ action.answerId ] }
                }
            }
            break;
        case ResponseActions.SINGLE_ANSWER_RESPONSE:
            response ={
                type: "SINGLE_ANSWER",
                typeId: 1,
                answerId: action.answerId
            };
            break;
        default:
            return state
    }
    if(response){
        let clone = {...state};
        clone[action.questionId] = response;
        return clone;
    }
    return state;
};


export default responses;