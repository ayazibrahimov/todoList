
import './App.css';
import Table from './components/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <div className="container">
         <div className="row">
           <div className="col-12 d-flex justify-content-center ">
              <div className="col-8 ">
                    <Table />
              </div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default App;
