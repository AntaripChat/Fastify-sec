export const registerSchema = {
    description: "Register a new user",
    tags: ["Auth"],
    body: {
      type: "object",
      properties: {
        email: { type: "string", example: "user@example.com" },
        password: { type: "string", example: "securepassword" }
      },
      required: ["email", "password"]
    }
  };
  
  export const loginSchema = {
    description: "Login a user",
    tags: ["Auth"],
    body: {
      type: "object",
      properties: {
        email: { type: "string", example: "user@example.com" },
        password: { type: "string", example: "securepassword" }
      },
      required: ["email", "password"]
    }
  };
  