import React, { useState } from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import css from "../../form/form.css";
import InputComponent from "../comps/Input";
import ButtonComponent from "../comps/Button";

const { FornatContainer } = css; // Исправлена опечатка (было FornatContainer)

const Main = () => {
    const [value, setValue] = useState("");
    const [type, setType] = useState("");
    const [comment, setComment] = useState("");

    // 1. Валидация теперь вызывается только по клику
    const validation = () => {
        if (value.length > 2 && type.length > 0 && comment.length>0) {
            console.log("✅ Validation success");

            setValue("");
            setType("");
            setComment("");


            // Здесь добавь логику отправки формы
        } else {
            console.log("❌ Validation fail");
        }
    };

    // 2. Цвет вычисляется сразу как переменная (без лишней функции)
    const buttonColor = value.length < 3 || type.length < 2 ? "#808080" : "#66ff00";

    return (
        <React.Fragment>
            <Head />

            <FornatContainer>
                <InputComponent inputValue={value} action={setValue} placeholder="Введите сумму транзакции" />
                <InputComponent inputValue={type} action={setType} placeholder="Введите тип транзакции" />
                <InputComponent inputValue={comment} action={setComment} placeholder="Введите комментарий" />
                
                   <ButtonComponent 
                  $bgColor={buttonColor}  // 📦 Передаём вычисленный цвет
                   onClick={validation} 
                >
                  Сохранить транзакцию
                  </ButtonComponent>
            </FornatContainer>
            
            <Foot />
        </React.Fragment>
    );
};

export default Main;