import { useState } from "react";
import './SimpleForm.css'

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

return(
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        className="input-field"
        placeholder="UserName"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <p>
        User Input: {inputValue}
      </p>
    </form>
  </div>
);
}
export default SimpleForm;