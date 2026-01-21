import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', company: '', position: '' });
  };

  return (
    <section className="registration" id="registration">
      <div className="container">
        <h2 className="section-title">Регистрация</h2>
        <div className="registration-content">
          <div className="registration-info">
            <h3>Присоединяйтесь к нам!</h3>
            <p>
              Зарегистрируйтесь на конференцию ИТ Ритм и получите возможность 
              узнать о последних трендах в IT-индустрии, пообщаться с коллегами 
              и расширить свой профессиональный кругозор.
            </p>
            <div className="registration-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Доступ ко всем докладам</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Материалы конференции</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Нетворкинг с коллегами</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Кофе-брейки и обед</span>
              </div>
            </div>
          </div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя и фамилия *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Иван Иванов"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ivan@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Компания</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Название компании"
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Должность</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Ваша должность"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
