"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 追加
export const addTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  await prisma.todo.create({ data: { title } });
  revalidatePath("/");
};


// 削除
export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    // SQLのwhereと同じ意味
    where: { id },
  });
  revalidatePath("/");
};
