import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'

const reactstrap = require('reactstrap');
console.log(reactstrap);
console.log(reactstrap.Button);

function App() {
  return (
    <div className="py-5">
      <div className="container">
        <Button>Primary</Button>
      </div>
    </div>
  );
}

export default App;
