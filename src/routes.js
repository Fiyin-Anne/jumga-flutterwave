import { Router} from 'express';
import ApiControllers from './controllers/controllers.js'
const router = Router();
const { homePage, ruleCheck } = ApiControllers;
import apiSchema from './validators/validators'
import validate from './middlewares/validation';
const { ruleSchema } = apiSchema;

router.get("/", homePage),
router.post("/validate-rule",  validate(ruleSchema), ruleCheck)

module.exports = router;