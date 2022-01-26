import prisma from "utils/prisma";

function getUsers() {
  const users = prisma.user.findMany();
  return users;
}

export default async function handler(req, res) {
  const users = await getUsers();
  res.status(200).json(users);
}
