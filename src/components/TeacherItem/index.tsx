import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}
interface TheacherItemProps {
  teacher: Teacher;
}

interface TextareaProps {
  name: string;
  label: string;
}

const TeacherItem: React.FC<TheacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post("connections", {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="blank"
          onClick={createNewConnection}
          href={`https://wa.me/55${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
