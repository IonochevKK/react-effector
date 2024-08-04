import { Event, Store } from 'effector';

export interface TodoModel {
  $input: Store<string>;
  $todos: Store<string[]>;
  change: Event<string>;
  submit: Event<void>;
  remove: Event<number>;
}

export interface ITodoListProps {
  label: string;
  model: TodoModel;
}
