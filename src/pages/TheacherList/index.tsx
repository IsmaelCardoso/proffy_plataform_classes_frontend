import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
import matter from "../../assets/json/matter.json";
import weekDays from "../../assets/json/weekDays.json";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíveis.">
        <form id="search-teachers">
          <Select name="subject" label="Matéria" options={matter} />
          <Select name="week_day" label="Dia da semana" options={weekDays} />

          <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
