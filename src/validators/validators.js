import { check } from 'express-validator';

export default {
    ruleSchema: [
        check('rule')
            .exists()
            .withMessage("rule is required.")
            .not()
            .isJSON()
            .withMessage("rule should be an object."),

        check('data')
            .exists()
            .withMessage("data is required.")
    
    ]
}