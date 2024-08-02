//Imports

function App(props) {

    return (
      <>
      <div className="header_bar"></div>

      <div className="buttons">
        <button>Open Vault</button>
        <button>New Task</button>
      </div>

      <div className="current_list">
        <h1>Active Tasks</h1>
        <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
        
      </div>
      </>
    );
  }
  
  export default App;
  
//w3schools - how to create header bar, check list, styling. Then add more functionality