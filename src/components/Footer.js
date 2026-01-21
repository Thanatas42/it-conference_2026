import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-curators">
              <div className="section-curator">
                <p>Руководитель проекта<br />
                  Светлана Лысикова</p>
                <p>Lysikova-S@gisca.ru<br />
                  +7 (981) 193 08 35</p>
              </div>

              <div className="section-curator">
                <p>Куратор проекта<br />
                  Александра Биушкина</p>
                <p>Biushkina-A@gisca.ru<br />
                  +7 (911) 088 82 11</p>
              </div>
            </div>

            <span>© 2025 ООО "УЦ ГИС". Все права защищены</span>
          </div>


          <div className="footer-section">
            <div className="footer-logo"></div>

            <span>Мероприятие носит закрытый характер.<br /> По вопросам сотрудничества и участия просим <br />обращаться по указанным средствам связи</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
