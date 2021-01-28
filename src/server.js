import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import router from "./routes/routes";
import errorHandler from "./middlewares/errorHandler";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use('/', router);
pp.use(cors())
app.use(errorHandler)

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } console.log(`Server running on port ${port}...`)
})

export default app