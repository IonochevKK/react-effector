import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { HomeRoot, HomeWrapperButtons } from './Home.styles';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeRoot>
      <HomeWrapperButtons>
        <Button onClick={() => navigate('/todo-effector')}>
          Todo effector
        </Button>
      </HomeWrapperButtons>
    </HomeRoot>
  );   
};
