import { prisma } from "../config/db.config";
import bcrypt from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";


export async function register(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { email, password } = req.body as { email: string; password: string };
    
    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return reply.code(400).send({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await prisma.user.create({ data: { email, password: hashedPassword } });

    return reply.send(user);
  } catch (error) {
    return reply.code(500).send({ message: "Error registering user",  error });
  }
}


async function login(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.code(401).send({ message: "Invalid credentials" });
    }
    
    const token = req.server.jwt.sign({ id: user.id });
    return reply.send({ token });
  } catch (error) {
    return reply.code(500).send({ message: "Error logging in", error });
  }
}

export default { register, login };