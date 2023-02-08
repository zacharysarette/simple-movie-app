import './App.css';

const Person = ({name, lastName, age}) => 
  <>
  <h1>Name: {name}</h1>
  <h1>Last Name: {lastName}</h1>
  <h1>Age: {age}</h1>
  </>


const App =()=> {
  const name = null; 
  return (
    <div className="App">
      <h1>Hello, {2 * 2}!</h1>
      {
        name ? (
          <>
          test
          </>
        ):(
          <>
          <h1>test</h1>
          <h1>There is no name</h1>
          <Person name={'John'} lastName={'Doe'} age={34}/>
          <Person name={'Jane'} lastName={'Doe'} age={24}/>
          <Person name={'Santa'} lastName={'Claus'} age={533}/>
          <Person name={'Willem'} lastName={'Mayhem'} age={11}/>
          </>
        )
      }
    </div>
  );
}

export default App;
