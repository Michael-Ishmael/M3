import {PageActions, RoutingActions} from '../actions';

const initialState = {
    currentPageIndex: 0,
    routingConditions: {}
};

const movePage = (state, action) => {

    switch (action.type) {
        case PageActions.NEXT:
            if(state.currentPageIndex < action.pages.length){
                let testIndex = state.currentPageIndex + 1;
                let testPage = action.pages[testIndex];
                let found = true;
                while(found && state.routingConditions && testPage.routingCondition && testPage.routingCondition.key in state.routingConditions){
                    found = false;
                    if(state.routingConditions[testPage.routingCondition.key] !== testPage.routingCondition.value){
                        if(testIndex + 1 < action.pages.length){
                            testIndex = testIndex + 1;
                            testPage = action.pages[testIndex];
                            found = true
                        }
                    }
                }
                return testIndex;
            }
            return state.currentPageIndex;

        case PageActions.PREV:
            if(state.currentPageIndex > 0){
                let testIndex = state.currentPageIndex - 1;
                let testPage = action.pages[testIndex];
                let found = true;
                while(found && state.routingConditions && testPage.routingCondition && testPage.routingCondition.key in state.routingConditions){
                    found = false;
                    if(state.routingConditions[testPage.routingCondition.key] !== testPage.routingCondition.value){
                        if(testIndex - 1 >= 0){
                            testIndex = testIndex - 1;
                            testPage = action.pages[testIndex];
                            found = true
                        }
                    }
                }
                return testIndex;
            }
            return state.currentPageIndex;

        case PageActions.GOTO:
            if(action.pageIndex >= 0 && action.pageIndex < state.pages.length){
                return action.pageIndex;
            }
            return state.currentPageIndex;
        default:
            return state.currentPageIndex;
    }
};

const handleRoutingFlag = (state, action) => {
  switch (action.type) {
      case RoutingActions.SET_ROUTING_FLAG:
          return {...state, [action.key]: action.value};
      case RoutingActions.REMOVE_ROUTING_FLAG:
          let clone = {...state};
          delete clone[action.key];
          return clone;
      default:
          return {...state.routingConditions};

  }
};

const pages = (state = initialState, action) => {
    switch (action.type) {
        case PageActions.NEXT:
        case PageActions.PREV:
        case PageActions.GOTO:
            return {...state, currentPageIndex: movePage(state, action), routingConditions: {...state.routingConditions}};
        case RoutingActions.SET_ROUTING_FLAG:
        case RoutingActions.REMOVE_ROUTING_FLAG:
            return {...state, currentPageIndex: state.currentPageIndex, routingConditions: handleRoutingFlag(state.routingConditions, action)};
        default:
            return state
    }
};

export default pages