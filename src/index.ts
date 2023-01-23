import express, {Request, Response} from "express";

const server = express();
server
  .use(express.json())
  .use("/health", (req: Request, res:Response ) => {
    res.send("ok")
  })

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));

export default server;