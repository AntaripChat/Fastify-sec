import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";

export function setupSwagger(app: FastifyInstance) {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Fastify API",
        description: "API documentation for Fastify Prisma CRUD",
        version: "1.0.0",
      },
      servers: [{ url: "http://localhost:3000", description: "Local server" }],
    },
  });

  app.register(fastifySwaggerUi, { routePrefix: "/docs" });

  // Register schemas
  app.addSchema({
    $id: "registerSchema",
    type: "object",
    properties: {
      email: { type: "string", example: "antarip@gmail.com" },
      password: { type: "string", example: "antarip1234" },
    },
    required: ["email", "password"],
  });

  app.addSchema({
    $id: "loginSchema",
    type: "object",
    properties: {
      email: { type: "string", example: "antarip@gmail.com" },
      password: { type: "string", example: "antarip1234" },
    },
    required: ["email", "password"],
  });
}
