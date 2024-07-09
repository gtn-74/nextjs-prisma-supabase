import { CreateTodoForm } from "@/components/create-todo-form";
import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-3">TODO APP</h1>
      {/* addTodo */}
      <div className="mb-6">
        <CreateTodoForm />
      </div>
      <div className="bg-amber-100 p-5 rounded-lg">
        <TodoList />
      </div>
    </div>
  );
}