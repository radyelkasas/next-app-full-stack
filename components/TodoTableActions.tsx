"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoListAction } from "@/actions/todoActions";
import Spinner from "./Spinner";
import { Itodo } from "@/interfaces";
import EditTodoForm from "./EditTodoForm";

const TodoTableActions = ({ todo }: { todo: Itodo }) => {
  const [loding, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        variant="destructive"
        className="ml-2"
        onClick={async () => {
          setLoading(true);
          await deleteTodoListAction({ id: todo.id });
          setLoading(false);
        }}
      >
        {loding ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableActions;
