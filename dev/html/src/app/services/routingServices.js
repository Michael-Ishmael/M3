const routingRuleTypes = {
    SHOW_IF_ALL: "SHOW_IF_ALL",
    HIDE_IF_ALL: "HIDE_IF_ALL",
    CHANGE_TEXT: "CHANGE_TEXT_IF_ALL"
    //Can add SHOW_IF_ANY etc if need arises

};


const applyRoutingRules = (questionnaire, routingRules, routingFlags) => {

};

export const validateRoutingItems = (items, routingRules, routingFlags) => {

    const validatedItems = [];
    if(!(items && items.length && routingRules && routingFlags)) return items;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if(item.routingRuleKeys){
            let show = true;
            for (let j = 0; j < item.routingRuleKeys.length; j++) {
                const routingRuleKey = item.routingRuleKeys[j];
                show = shouldShow(routingRuleKey, routingRules, routingFlags, show);
            }
            if(show) {
                if(item.text){
                    for (let j = 0; j < item.routingRuleKeys.length; j++) {
                        const routingRuleKey = item.routingRuleKeys[j];
                        const newText = replaceTernaries(routingRuleKey, item.text, routingRules, routingFlags);
                        if(newText !== item.text){
                            item = {...item, text: newText}
                        }
                    }
                }
                validatedItems.push(item);
            }

        } else {
            validatedItems.push(item)
        }

    }
    return validatedItems;

};

export const gatherRoutingFlags = (responses, questions, answers) => {

    const routingFlags = {};

    const routedQuestions = questions.filter(q => (q.setRoutingCondition ||
        answers.filter(a => a.questionId === q.questionId).some(a => a.setRoutingCondition) ))
        .reduce( (accumulator, question, i) => {
            if(i === 1){
                const obj = {};
                obj[accumulator.questionId] = accumulator;
                obj[question.questionId] = question;
                return obj
            }
            accumulator[question.questionId] = question;
            return accumulator;
        } );

    for (const questionId in responses) {
        if(questionId in routedQuestions){
            const response = responses[questionId];
            const question = routedQuestions[questionId];
            const answer = answers.find(a => a.answerId === response.answerId);
            if(answer){

              if(answer.setRoutingCondition){
                  routingFlags[answer.setRoutingCondition.key] = answer.setRoutingCondition.value;
              } else if(question.setRoutingCondition){
                  routingFlags[question.setRoutingCondition.key] = question.setRoutingCondition.defaultValue;
              }
            }
        }
    }

    return routingFlags;

};

const shouldShow = (itemKey, routingRules, routingFlags, currentValue) => {
    if (!(itemKey in routingRules)) return currentValue;
    const rule = routingRules[itemKey];
    if(!([routingRuleTypes.SHOW_IF_ALL, routingRuleTypes.HIDE_IF_ALL].indexOf(rule.type) > -1)) return currentValue;
    let ruleMatched = rule.flags.every(f => f.key in routingFlags && routingFlags[f.key] === f.value);
    //Flip if hide
    if(rule.type === routingRuleTypes.HIDE_IF_ALL) ruleMatched = !ruleMatched;
    return ruleMatched;
};


const replaceTernaries = (itemKey, itemText, routingRules, routingFlags) => {
    //TODO: Handle multiple terms
    if (!(itemKey in routingRules)) return itemText;
    const ternStr = "[~ternary~]";
    if(itemText.indexOf(ternStr) === -1) return itemText;
    const rule = routingRules[itemKey];
    if(rule.type !== routingRuleTypes.CHANGE_TEXT) return itemText;
    let ruleMatched = rule.flags.every(f => f.key in routingFlags && routingFlags[f.key] === f.value);
    let replacementText = ruleMatched ? rule.trueVal : rule.falseVal ;

    return itemText.replace(ternStr, replacementText);
};