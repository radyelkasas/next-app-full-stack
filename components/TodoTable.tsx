import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { Itodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import { deleteTodoListAction } from "@/actions/todoActions";
import { useState } from "react";
import Spinner from "./Spinner";
import TodoTableActions from "./TodoTableActions";

export function TodoTable({ todos }: { todos: Itodo[] }) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-end">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo, index) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="outline">Not Completed</Badge>
              )}
            </TableCell>
            <TableCell className="text-end">
              <TodoTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
