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
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1>INCREMENT / DECREMENT COUNTER</h1>
        <Container>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(Dec())}
          >
            -
          </Button>
          <Input
            value={numberChanger}
            style={{ textAlign: 'center', alignItems: 'center' }}
          ></Input>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(Inc())}
          >
            +
          </Button>
        </Container>
      </Container>
    </>
  );
};
export default IncDecUi;
