import styled from '@emotion/styled';

export const TodoListRoot = styled('div')({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const TodoListItemWrapper = styled('li')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  padding: '10px',
  position: 'relative',
  listStyle: 'none',
  counterIncrement: 'todo-counter',

  '&::before': {
    content: 'counter(todo-counter) ". "',
    position: 'absolute',
    left: '-20px',
    fontWeight: 'bold',
    color: '#333',
  },
});

export const TodoListItemsContainer = styled('ol')({
  width: '100%',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  counterReset: 'todo-counter',
});
