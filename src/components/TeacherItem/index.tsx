import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/51178683?s=460&u=d5623e861d8dc420b893583bef69a0b58bafa5fe&v=4"
          alt="Ismael Cardoso"
        />
        <div>
          <strong>Ismael Cardoso</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Apaixonado por programação e tecnologias. Sempre em busca por novos.
        <br /> <br />
        conhecimentos, consolidação e aprimoramento como desenvolvedor.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
