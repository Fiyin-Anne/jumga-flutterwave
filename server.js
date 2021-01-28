import express from "express";
import bodyparser from "body-parser";
import "dotenv/config";
import router from "./src/routes";
import errorHandler from "./src/middlewares/errorHandler";

const app = express();
const port = process.env.PORT;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use('/api/v1', router);
app.use(errorHandler)

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } console.log(`Server running on port ${port}...`)
})

export default app