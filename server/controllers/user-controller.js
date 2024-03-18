const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Register
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            res.status(400).json({ error: "Email already exist" });
            console.log("User is already registered");
            return;
        }

        const newUser = await prisma.user.create({ data: { name, email, password } });

        res.status(201).json({
            msg: "User created successfully",
            userId: newUser.id,
        });
        console.log(newUser);
    } catch (error) {
        res.status(error.status || 500).json({ error:"Internal Server Error" });
        console.error(error);
    }
}

module.exports = { register };