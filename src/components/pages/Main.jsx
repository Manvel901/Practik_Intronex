import React from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import css from "../../form/form.css";
import InputComponent from "../comps/Input";
import ButtonComponent from "../comps/Button";

const {FornatContainer}= css;
const Main =()=>{
    return(
        <React.Fragment>
        <Head></Head>

        <FornatContainer>
            <InputComponent placeholder = {"Введите сумму транзакции"}>
            </InputComponent>
            <InputComponent placeholder = {"Введите тип транзакции"}>
            </InputComponent>
            <InputComponent placeholder = {"Введите комментарий"}>
            </InputComponent>
            <ButtonComponent></ButtonComponent>
        </FornatContainer>
          
        <Foot></Foot>
        </React.Fragment>
    );
}

export default Main;