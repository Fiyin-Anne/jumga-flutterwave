import Joi from 'joi';

const fieldsValidation = (fields) => {
    const fieldsSchema = Joi.object({
        rule: Joi.object().required().keys({
            field: Joi.required().messages({
                "any.required": "field is required.", 
            }),
            condition_value: Joi.required().messages({
                "any.required": "condition_value is required.",
            }),
            condition: Joi.required().valid('eq', 'neq', 'gt', 'gte', 'contains').messages({
                "any.required": "condition is required.",
                "any.only": "condition is invalid."
            })
        }).messages({
            "any.required": "rule is required.",
            "object.base": "rule should be an object.",
        }),
        
        data: Joi.required().messages({
            "any.required": "data is required.",
        })
    }).messages({
        "object.unknown": "You have used an invalid key."
    });
    return fieldsSchema.validate(fields);
}

export {fieldsValidation};