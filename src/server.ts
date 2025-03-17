import app from "./app";
import fastifyJwt from "@fastify/jwt";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
//import userRoutes from "./routes/user.routes";
import { setupSwagger } from "./config/swagger";

dotenv.config();

app.register(fastifyJwt, { secret: process.env.JWT_SECRET! });
setupSwagger(app);

app.register(authRoutes,{prefix:"/api/v1"});
//app.register(userRoutes);

app.listen({ port: 3000 }, () => console.log("Server running on http://localhost:3000"));