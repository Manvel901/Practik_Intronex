import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import Foot from "../views/global/Foot";
import css from "../../form/form.css";
import InputComponent from "../comps/Input";
import ButtonComponent from "../comps/Button";


const { FornatContainer } = css; // Исправлена опечатка (было FornatContainer)

const Main = (props) => {
    const { action } = props;
    const [value, setValue] = useState("");
    const [type, setType] = useState("доходы");
    const [comment, setComment] = useState("");

    // 1. Валидация теперь вызывается только по клику
    const validation = () => {
        if (value.length > 2 && type.length > 0 && comment.length > 0) {
            console.log("✅ Validation success");

            const newDataLine = `${value}::${type}::${comment}`;
            // setData(prev=>{
            //     let newData = prev;
            //     newData.push(newDataLine);
            //     return newData[0];
            // });

            action(prev =>
                [...prev, newDataLine]);

            setValue("");
            setType("доходы");
            setComment("");


            // Здесь добавь логику отправки формы
        } else {
            console.log("❌ Validation fail");
        }
    };

    const handleChange = (event) => {
    setType((event.target.value));
  };

    const handleChangeCom = (event) => {
    setComment((event.target.value));
  };

    // 2. Цвет вычисляется сразу как переменная (без лишней функции)
    const buttonColor = value.length < 3 || type.length < 2 ? "#808080" : "#66ff00";

    return (
        <React.Fragment>


            <FornatContainer style={{alignItems: "flex-start"}}>
                <InputComponent inputValue={value} action={setValue} placeholder="Введите сумму транзакции" />
                <FormControl style={{marginTop: "9px", marginButton:"14px"}}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={type}
                        onChange={handleChange}
                        style={{marginTop:"5px", marginLeft:"7px"}}
                    >
                        <FormControlLabel value="расходы" control={<Radio />} label="Расходы" />
                        <FormControlLabel value="доходы" control={<Radio />} label="Доходы" />
                    </RadioGroup>
                </FormControl>
                   
                {type ==="доходы" && <InputComponent inputValue={comment} action={setComment} placeholder="Введите комментарий" />}
                {type === "расходы" && <FormControl style={{marginTop: "0px", marginButton:"14px"}}>
                    <FormLabel id="demo-controlled-radio-buttons-group" style={{ color:"red"}}>Выберите тип расходов</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={comment} 
                        onChange={handleChangeCom}
                        style={{marginTop:"5px", marginLeft:"7px"}}
                    >
                        <FormControlLabel value="оплата Интернета" control={<Radio />} label="оплата Интернета" />
                        <FormControlLabel value="оплата ЖКХ" control={<Radio />} label="оплата ЖКХ" />
                        <FormControlLabel value="путешествия" control={<Radio />} label="путешествия" />
                        <FormControlLabel value="образование" control={<Radio />} label="образование" />
                    </RadioGroup>
                </FormControl>
                 }

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