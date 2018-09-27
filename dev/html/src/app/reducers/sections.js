import { SectionActions } from '../actions';


const sections = (state = { currentSectionIndex: -1, sections: []}, action) => {

    switch (action.type) {
        case SectionActions.NEXT:
            if(state.currentSectionIndex < state.sections.length -1){
                return {
                    currentSectionIndex: state.currentSectionIndex + 1,
                    sections: state.sections.slice()
                }
            } else {
                return state;
            }
        case SectionActions.PREV:
            if(state.currentSectionIndex > 0){
                return {
                    currentSectionIndex: state.currentSectionIndex - 1,
                    sections: state.sections.slice()
                }
            } else {
                return state;
            }
        case SectionActions.GOTO:
            if(action.sectionId){
                let foundSection = state.sections.find((s) => s.sectionId === action.sectionId);
                if(foundSection){
                    let i = sections.indexOf(foundSection);
                    if(i !== state.currentSectionIndex){
                        return {
                            currentSectionIndex: i,
                            sections: state.sections.slice()
                        }
                    }
                }
            }
            return state;
        default:
            return state;
    }
}

export default sections