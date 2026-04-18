import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // Login state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Register state
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [phone, setPhone] = useState("")

  // Login validation
  function validateLogin(e) {
    e.preventDefault()

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (!email.match(emailPattern)) {
      alert("Enter valid email")
      return
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    alert("Login successful")
  }

  // Register validation
  function validateRegister(e) {
    e.preventDefault()

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let phonePattern = /^[0-9]{10}$/

    if (name.trim() === "") {
      alert("Name is required")
      return
    }

    if (age <= 0 || age > 100) {
      alert("Enter valid age")
      return
    }

    if (!regEmail.match(emailPattern)) {
      alert("Enter valid email")
      return
    }

    if (!phone.match(phonePattern)) {
      alert("Enter valid 10-digit phone number")
      return
    }

    alert("Registration successful")
  }

  return (
    <div className='App'>
      <div
        style={{
          backgroundImage: "url('/download (2).jpg')",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >

        <header className="App-header">
          <button>Button</button>
        </header>

        {/* Register Form */}
        <form className='container mt-4' onSubmit={validateRegister}>
          <label>Name</label>
          <input 
            type='text' 
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />

          <label>Age</label>
          <input 
            type='number' 
            className='form-control'
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Email</label>
          <input 
            type='email' 
            className='form-control'
            onChange={(e) => setRegEmail(e.target.value)}
          />

          <label>Phone</label>
          <input 
            type='text' 
            className='form-control'
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className='btn btn-primary mt-2'>Register</button>
        </form>

        {/* Login Form */}
        <form className='container mt-4' onSubmit={validateLogin}>
          <label>Email</label>
          <input 
            type='text' 
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input 
            type='password' 
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='btn btn-primary mt-2'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default App