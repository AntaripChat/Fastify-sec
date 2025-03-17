import { FastifyInstance } from "fastify";
import auth from "../controllers/auth.controllers";
import { registerSchema, loginSchema } from "../schemas/auth.schema";

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/register",
    {
      schema: {
        description: "Register a new user",
        tags: ["Auth"],
        body: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" }
          },
          required: ["email", "password"]
        }
      }
    },
    auth.register
  );

  fastify.post(
    "/login",
    {
      schema: {
        description: "Login a user",
        tags: ["Auth"],
        body: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" }
          },
          required: ["email", "password"]
        }
      }
    },
    auth.login
  );
}