export default {
    checkDataFieldType(rule, data) {
        switch(typeof data) {
            case 'object':
                return rule.field in data;
            case 'array':
            case 'string':
                return !isNaN(rule.field) && parseInt(rule.field);
        }
    },
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
            case "contains":
                return data[rule.field] === rule.condition_value;
            
        }
    }
}