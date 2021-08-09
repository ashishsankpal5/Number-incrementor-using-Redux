import IncDecUi from './IncDecUI';

import ChangeNums from './ChangeNum';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={IncDecUi} />
        <Route exact path="/hooks" component={ChangeNums} />
      </Router>
    </>
  );
};
export default App;
