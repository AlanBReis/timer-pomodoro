import React from "react";
import style from './Botao.module.scss'

export default (props: { children: React.ReactNode }) => (
    <button className={style.botao}>{props.children}</button>
)
