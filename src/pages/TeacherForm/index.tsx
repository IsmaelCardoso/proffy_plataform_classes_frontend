import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/icons/warning.svg";

import "./styles.css";
import matter from "../../assets/json/matter.json";
import weekDays from "../../assets/json/weekDays.json";

const initialState = [{ week_day: 0, from: "", to: "" }];

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState(initialState);

  const addNewScheduleItem = () => {
    return setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: "", to: "" },
    ]);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={matter} />
          <Input name="cost" label="Custo da sua hora aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div className="schedule-item">
                <Select
                  key={scheduleItem.week_day}
                  name="week_day"
                  label="Dia da semana"
                  options={weekDays}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso inportante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
