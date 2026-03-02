import "./App.css"

function App() {
  return(
    <>
    <div className="App">
    <Table />
    <Image />
    <button>  Hello world</button>
    </div>
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
    </>
  )
}
function Image() {
  return <img src="lemons.jpg" alt="random image" id="img1"/>
}
function Table() {
  return (
    <table border={1}>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>30</td>
      </tr>
    </table>

  );
}
export default App;
