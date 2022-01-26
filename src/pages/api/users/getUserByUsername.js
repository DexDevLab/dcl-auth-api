import prisma from "utils/prisma";

function getUserByUsername(username) {
  const user = prisma.user.findUnique({
    where: { username },
  });
  return user;
}

export default async function handler(req, res) {
  const { username } = req.body;
  const user = await getUserByUsername(username);
  res.status(200).json(user);
}
