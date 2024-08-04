import styled from '@emotion/styled';

export const ButtonRoot = styled('button')({
  padding: '10px 20px',
  backgroundColor: 'orange',
  color: '#fff',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'all 0.3s ease',

  ':hover': {
    transform: 'scale(0.95)',
    backgroundColor: 'darkorange',
  },

  ':active': {
    backgroundColor: 'orangered',
  },
});
