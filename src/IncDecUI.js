import { Button, Input, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Inc, Dec } from './actions/index';
const IncDecUi = () => {
  const dispatch = useDispatch();
  const numberChanger = useSelector((state) => state.numberChanger);
  return (
    <>
      <Container
        style={{
          // border: '2px solid red',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(Dec(5))}
        >
          -
        </Button>
        <Input value={numberChanger}></Input>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(Inc(5))}
        >
          +
        </Button>
      </Container>
    </>
  );
};
export default IncDecUi;
