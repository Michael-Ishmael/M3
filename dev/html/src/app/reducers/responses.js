import {ResponseActions} from "../actions";


const responses = (state = {}, action) => {
    let response;
    switch (action.type) {
        case ResponseActions.MULTIPLE_ANSWER_RESPONSE:
            if(action.questionId in state){
                response = {...state[action.questionId]};
                if(action.added){
                    if(!response.answerIds.indexOf(action.answerId) > -1){
                        response.answerIds = [...response.answerIds ,action.answerId];
                    }
                } else {
                    const foundIndex = response.answerIds.indexOf(action.answerId);
                    response.answerIds = response.answerIds.filter((answer, index) => index !== foundIndex);

                }
            } else {
                if(action.added){
                    response = {type: "MULTIPLE_ANSWER", typeId: 2, answerIds: [ action.answerId ] }
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
        case ResponseActions.TEXT_ANSWER_RESPONSE:
            response ={
                type: "TEXT_ANSWER",
                typeId: 3,
                answerId: action.answerId,
                responseText: action.answerText
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