import conditionCheck from '../helpers/conditions';
import { ApplicationError } from '../helpers/error';
import { fieldsValidation } from '../validators/validators';

const { checkCondition, checkDataFieldType } = conditionCheck;

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
        const { error } = fieldsValidation(request.body)
        if (error) throw new ApplicationError(400, error.message);
        
        const { rule, data } = request.body;

        const dataType = checkDataFieldType(rule, data)
        if (dataType || dataType === 0) {
            let condition = checkCondition(rule, data);
            if(!condition) {
                throw new ApplicationError(400,
                    `field ${rule.field} failed validation.`,
                    {
                        "validation": {
                            "error": true,
                            "field": `${rule.field}`,
                            "field_value": `${data[rule.field]}`,
                            "condition": `${rule.condition}`,
                            "condition_value": `${rule.condition_value}`
                        }
                    }
                );
            }
            return response.status(200).json({
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
        throw new ApplicationError(400,
            `field ${rule.field} is missing from data.`,
        );
    }

}
