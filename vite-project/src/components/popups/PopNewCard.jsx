import { Link, useNavigate } from "react-router-dom";
import { routeObj } from "../../lib/const";
import * as S from "../popups/PopNewCard.styled";
import Calendar from "../calendar/Calendar";
import { useState } from "react";
import { postToDo } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUser";
import { topicHeader, topicWithColors, topicsMeanings } from "../../lib/topic";
import { useTaskContext } from "../../contexts/hooks/useTask";

function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { setCards } = useTaskContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };

    postToDo({ ...taskData, token: user?.token })
      .then((responseData) => {
        setCards(responseData.tasks);

        navigate(-1);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
              {" "}
              <Link to={routeObj.MAIN}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                  <S.FormNewInput
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="textArea">Описание задачи</S.SubTtl>
                  <S.FormNewArea
                    onChange={handleInputChange}
                    name="description"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                

                {topicWithColors.map((item, index) => {
                  return (
                    <S.CategoriesTheme
                    key = {index}
                      htmlFor={index}
                      $topicColor={[item.color]}
                      style = {newTask.topic === item.topic ? {opacity: 1} : {}}
                    >
                      {item.topic}

                      <input
                        onChange={handleInputChange}
                        type="radio"
                       id={index}
                        name="topic"
                        value={item.topic}
                      />
                    </S.CategoriesTheme>
                  );
                })}

               
              </S.CategoriesThemes>
            </S.Categories>
            <S.FormNewCreate onClick={handleSubmit}>
              Создать задачу
            </S.FormNewCreate>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
