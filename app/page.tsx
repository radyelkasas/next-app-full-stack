import { getTodoUserListAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/AddTodoForm";
import Nav from "@/components/Nav";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodoUserListAction({ userId });

  return (
    <main className="container mx-auto flex flex-col items-end justify-between gap-8 p-4 my-5">
      <Nav />
      <AddTodoForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
