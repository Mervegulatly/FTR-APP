import React, { useState } from 'react';
import './index.css';

interface FormData {
    username: string;
    email: string;
    password: string;
}
function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFormData = () => {
    if (formData.username === '' || formData.email === '' || formData.password === '') {
      alert('Lütfen tüm alanları doldurun.');
      return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!formData.email.match(emailPattern)) {
      alert('Geçerli bir e-posta adresi girin.');
      return false;
    }

    if (formData.password.length < 6) {
      alert('Şifre en az 6 karakter uzunluğunda olmalıdır.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData()) {
      alert(`Kayıt başarılı! Kullanıcı Adı: ${formData.username}, E-posta: ${formData.email}`);
    }
  };

  return (
    <div className='body'>
      <div className="container">
        <div className='h2'>Kayıt Ol</div>
        <form id="registrationForm" onSubmit={handleSubmit}>

          <div className="registerbutton">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registerbutton">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="registerbutton">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="registerbutton">
            <button type="submit">Kayıt Ol</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
