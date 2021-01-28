import conditionCheck from '../helpers/condition'
import {ApplicationError} from '../helpers/error'
const { checkCondition } = conditionCheck;

export default {
    homePage(request, response) {
        const data = {
            "message": "My Rule-Validation API",
            "status": "success",
            "data": {
              "name": "Akinsiku Fiyinfoluwa",
              "github": "@fiyin-anne",
              "email": "fiyinakinsiku.b@gmail.com",
              "mobile": "07034536402"
            }
        }
        return response.status(200).json(data);
    },

    ruleCheck(request, response) {
        const { rule, data } = request.body;

        if (rule.field in data) {
            let condition = checkCondition(rule, data);
            if(condition) {
                return response.status(200).json(
                    {
                        "message": `field ${rule.field} successfully validated.`,
                        "status": "success",
                        "data": {
                            "validation": {
                            "error": false,
                            "field": `${rule.field}`,
                            "field_value": `${data[rule.field]}`,
                            "condition": `${rule.condition}`,
                            "condition_value": `${rule.condition_value}`
                            }
                        }
                    })
            }
        }
        throw new ApplicationError(400, `field ${rule.field} is missing from data.`);
        // return response.status(400).json({
        //     "message": `field ${rule.field} is missing from data.`,
        //     "status": "error",
        //     "data": null
        // })

    }
}
