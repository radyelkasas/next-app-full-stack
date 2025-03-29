"use server";
import { Itodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoUserListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  const todoList = await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return todoList;
};
export const createTodoListAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string;
  completed?: boolean;
  userId: string;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId,
    },
  });
  revalidatePath("/");
};
export const deleteTodoListAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

export const updateTodoListAction = async ({ todo }: { todo: Itodo }) => {
  await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      title: todo.title,
      body: todo.body,
      completed: todo.completed,
    },
  });
  revalidatePath("/");
};
