import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email === "" || password === "") {
      alert("Debes rellenar todos los campos");
      return;
    }

    
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    
    alert(`Bienvenid@, ${email}!`);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login 🍕</h1>
        <br />
        <label htmlFor="email">
          Email:
          <br />
          <input
            id="email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            required 
          />
        </label>
        <br />
        <label htmlFor="password">
          Contraseña:
          <br />
          <input
            id="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            required 
          />
        </label>
        <br />
        
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}


