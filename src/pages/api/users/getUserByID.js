import prisma from "utils/prisma";

function getUserByID(id) {
  const user = prisma.user.findUnique({
    where: { id: Number(id) },
  });
  return user;
}

export default async function handler(req, res) {
  const { id } = req.body;
  const user = await getUserByID(id);
  res.status(200).json(user);
}
