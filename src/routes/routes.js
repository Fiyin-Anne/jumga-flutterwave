import { Router} from 'express';
import ApiControllers from '../controllers/controllers.js';

const router = Router();
const { homePage, ruleCheck } = ApiControllers;

router.get("/", homePage),
router.post("/validate-rule", ruleCheck)

module.exports = router;