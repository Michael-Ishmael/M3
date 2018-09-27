import { connect } from 'react-redux'
import { goToNextSection, goToPrevSection } from '../actions'
import Section from '../components/Section'


const getCurrentSectionText = (state) => {
    if(state.currentSectionIndex >= 0 && state.currentSectionIndex < state.sections.length){
        let currentSection = state.sections[state.currentSectionIndex];
        return currentSection.sectionText;
    }
};

const mapStateToProps = state => ({
    text: getCurrentSectionText(state)
});

const mapDispatchToProps = dispatch => ({
    onNext: () => dispatch(goToNextSection()),
    onPrev: () => dispatch(goToPrevSection())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section)