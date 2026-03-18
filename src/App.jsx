import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to My Production App</h1>

      <form className="form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;