import React from "react";
import style from "./Lista.module.scss"
import Item from "./item";

function Lista() {
    const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00",
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00",
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00",
        },
    ];
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
