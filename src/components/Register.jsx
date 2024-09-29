import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "" || password === "" || confirmPassword === "") {
      alert("Debes rellenar todos los campos");
      return;
    }

    
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    
    alert(`Tu registro se ha llevado a cabo con los siguientes datos, Email: ${email}, Password:${password} <div className=""></div>`);
    
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Registro 🍕</h1>
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
        <label htmlFor="confirm-password">
          Confirmar contraseña:
          <br />
          <input
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            type="password"
            required 
          />
        </label>
        <br />
        <br />
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}
