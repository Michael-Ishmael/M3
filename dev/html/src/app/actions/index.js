
export const SectionActions = {
    NEXT: 'NEXT',
    PREV: 'PREV',
    GOTO: 'GOTO'
};


export const goToNextSection = () => ({
    type: SectionActions.NEXT
});

export const goToPrevSection = () => ({
    type: SectionActions.PREV
});

export const goToSection = (sectionId) => ({
    type: SectionActions.GOTO,
    sectionId
});
