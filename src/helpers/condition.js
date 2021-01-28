export default {
    checkCondition(rule, data) {
        switch(rule.condition) {
            case "eq":
                return data[rule.field] === rule.condition_value;
            case "neq":
                return data[rule.field] !== rule.condition_value;
            case "gt":
                return data[rule.field] > rule.condition_value;
            case "gte":
                return data[rule.field] >= rule.condition_value;
            
        }
    }
}