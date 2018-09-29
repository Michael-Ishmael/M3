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
                show = shouldShow(routingRuleKey, routingRules, routingFlags);
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

const shouldShow = (itemKey, routingRules, routingFlags) => {
    if (!(itemKey in routingRules)) return true;
    const rule = routingRules[itemKey];
    if(!([routingRuleTypes.SHOW_IF_ALL, routingRuleTypes.HIDE_IF_ALL].indexOf(rule.type) > -1)) return true;
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
    if(!rule.type === routingRuleTypes.CHANGE_TEXT) return itemText;
    let ruleMatched = rule.flags.every(f => f.key in routingFlags && routingFlags[f.key] === f.value);
    let replacementText = ruleMatched ? rule.trueVal : rule.falseVal ;

    return itemText.replace(ternStr, replacementText);
};