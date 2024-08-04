import React from 'react';
import {
  TodoListItemsContainer,
  TodoListItemWrapper,
  TodoListRoot,
} from './TodoList.styles';
import { useList, useUnit } from 'effector-react';
import { Button, ClickHandler } from '../../../components/Button';
import { ITodoListProps } from './TodoList.types';

export const TodoList = ({ label, model }: ITodoListProps) => {
  const input = useUnit(model.$input);

  const handleSubmitClick: ClickHandler = (event) => {
    event.preventDefault();
    model.submit();
  };

  const handleRemoveClick =
    (index: number): ClickHandler =>
    (event) => {
      event.preventDefault();
      model.remove(index);
    };

  const todos = useList(model.$todos, (value: React.ReactNode, index) => (
    <TodoListItemWrapper>
      {value}
      <Button onClick={handleRemoveClick(index)}>Remove</Button>
    </TodoListItemWrapper>
  ));

  return (
    <TodoListRoot>
      <h1>{label}</h1>
      <form>
        <label>Insert todo: </label>
        <input
          type="text"
          value={input}
          onChange={(event) => model.change(event.currentTarget.value)}
        />
        <Button type="submit" onClick={handleSubmitClick}>
          Добавить
        </Button>
        <TodoListItemsContainer>{todos}</TodoListItemsContainer>
      </form>
    </TodoListRoot>
  );
};
