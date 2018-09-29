import { combineReducers } from 'redux'
//import  pages from './pages'
import responses from "./responses";
import {PageActions, RoutingActions} from "../actions";

export default combineReducers (
    {
        currentPageIndex: (state = 0, action) => {
            switch (action.type) {
                case PageActions.NEXT:
                    if (state < action.pageCount -1) return state + 1;
                    return state;
                case PageActions.PREV:
                    if (state > 0) return state - 1;
                    return state;
                case PageActions.GOTO:
                    if (action.pageIndex >= 0 && action.pageIndex < action.pageCount -1) {
                        return action.pageIndex;
                    }
                    return state;
                default:
                    return state;
            }
        },
        answers: (state = [], action) => ([]),
        responses: responses,
        routingFlags: (state = {}, action) => {
            switch (action.type) {
                case RoutingActions.SET_ROUTING_FLAG:
                    return {...state, [action.key]: action.value};
                case RoutingActions.REMOVE_ROUTING_FLAG:
                    let clone = {...state};
                    delete clone[action.key];
                    return clone;
                default:
                    return state;

            }
        }
    }
)