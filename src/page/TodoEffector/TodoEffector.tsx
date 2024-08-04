import React from 'react';
import { TodoEffectorRoot } from './TodoEffector.styles';
import { createEvent, createStore, sample } from 'effector';
import { TodoList } from './TodoList';

export const TodoEffector = () => {
  function createTodoList(initial: string[]) {
    const insert = createEvent<string>();
    const remove = createEvent<number>();
    const change = createEvent<string>();
    const reset = createEvent<void>();

    const $input = createStore<string>('');
    const $todos = createStore<string[]>(initial);

    $input.on(change, (_, value) => value);

    $input.reset(insert);
    $todos.on(insert, (todos, newTodo) =>
      newTodo !== '' ? [...todos, newTodo] : [...todos]
    );

    $todos.on(remove, (todos, index) => todos.filter((_, i) => i !== index));

    $input.reset(reset);

    const submit = createEvent<React.SyntheticEvent>();
    submit.watch((event) => event.preventDefault());

    sample({
      clock: submit,
      source: $input,
      target: insert,
    });

    return {
      submit,
      remove,
      change,
      reset,
      $todos,
      $input,
    };
  }

  const firstTodoList = createTodoList([]);

  return (
    <TodoEffectorRoot>
      <TodoList label="TodoApp" model={firstTodoList} />
    </TodoEffectorRoot>
  );
};
