import { deleteTodo } from "@/lib/action";

export const DeleteTodoButton = ({ id }: { id: number }) => {
  // Server Actions で追加の引数を渡すには、bind
  const deleteTodoWitchId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWitchId}>
      <button className="px-3 py-1 text-sm font-medium text-white bg-rose-600 rounded-lg cursor-pointer hover:bg-red-700 focus:ring-4 focus:ring-rose-300">
        削除
      </button>
    </form>
  );
};
