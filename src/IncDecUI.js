import { Button, Input, Container, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Inc, Dec } from './actions/index';
import { Link } from 'react-router-dom';
import './style.css';
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
        <h1>INCREMENT / DECREMENT COUNTER WITH REDUX</h1>
        <Container>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(Dec(5))}
          >
            -
          </Button>
          <TextField
            className="inpt"
            value={numberChanger}
            style={{ textAlign: 'center', alignItems: 'center' }}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(Inc(5))}
          >
            +
          </Button>
        </Container>
        <Link to="/hooks">
          <Button variant="contained" color="primary">
            with hooks
          </Button>
        </Link>
      </Container>
    </>
  );
};
export default IncDecUi;
