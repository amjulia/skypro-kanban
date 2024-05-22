import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "../calendar/Calendar";
import { routeObj } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTaskContext } from "../../contexts/hooks/useTask";
import { deleteTodo, editTodo } from "../../api";
import { useState } from "react";
import { status, topicHeader } from "../../lib/topic";
import * as S from "../popups/PopBrowse.styled";

function PopBrowse() {
  const { id } = useParams();
  const { user } = useUserContext();
  const [isEdited, setIsEdited] =useState(false);
  const { cards, setCards } = useTaskContext();
  const card = cards.find((item) => item._id === id);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  
  const [editTask, setEditTask] = useState({
    title: card.title,
    description: card.description,
    topic: card.topic,
    date: card.date,
    status: card.status,
  });
  const [statusCard, setStatusCard] = useState(card.status);

  const taskData = { ...editTask, date: selected };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  function deleteTask(e) {
    e.preventDefault();
    deleteTodo({ token: user?.token, id })
      .then((responseData) => {
        setCards(responseData.tasks);
        navigate(routeObj.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function editedTask() {
    console.log("редактирование")
    editTodo({token: user?.token, 
      id, 
      title: taskData.title,
      status:statusCard,
      date: selected,
      description: taskData.description,
      topic: taskData.topic,
    }).then((responseData) => {
      setCards(responseData.tasks);
      navigate(routeObj.MAIN);
    }).catch((err) => {
      setError(err.message);
    });
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Задача № {id}</S.PopBrowseTtl>
              <S.CategoriesTheme $topicColor={topicHeader[card.topic]}>
                <p>{card.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <p>Статус</p>
              <S.StatusThemes>
                {status.map((item, index) => {
                  return (
                    <S.StatusTheme
                     onClick={()=>{setStatusCard(item)}}
                      key={index}
                      htmlFor={index}
                      style={
                        editTask.status === item
                          ? { backgroundColor: "#94a6be", color: "#ffffff" }
                          : {}
                      }
                    >
                      {item}
                      <input
                        onChange={handleInputChange}
                        type="radio"
                        id={index}
                        name="status"
                        value={item}
                      />
                    </S.StatusTheme>
                  );
                })}
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01">
                    Описание задачи: {card.title}
                  </label>
                  {!isEdited && (
                     <S.FormBrowseArea
                     disabled={true}
                     defaultValue={card.description}
                     name="description"
                     id="textArea01"
                     readOnly=""
                     placeholder="Введите описание задачи..."
                   >
                    
                   </S.FormBrowseArea>
                  )}
                  {isEdited && (
                      <S.FormBrowseArea
                      onChange={handleInputChange}
                      defaultValue={card.description}
                      disabled={false}
                      name="description"
                      id="textArea01"
                      placeholder="Введите описание задачи..."
                    >
                                          
                    </S.FormBrowseArea>
                  )}
                  
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>
          {!isEdited && (
          <S.PopBrowseBtnBrowse>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <S.BtnGroup>
                <S.BtnBor onClick={() => {setIsEdited(!isEdited)}}>
                  Редактировать задачу
                  </S.BtnBor>
                <S.BtnBor onClick={deleteTask}>Удалить задачу</S.BtnBor>
              </S.BtnGroup>
              <S.BtnBg>
                <Link to={routeObj.MAIN}><p>Закрыть</p></Link>
              </S.BtnBg>
            </S.PopBrowseBtnBrowse>)}
            
            {isEdited && (
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <S.BtnBg onClick={editedTask}>
                  Сохранить
                </S.BtnBg>
                <S.BtnBor onClick={() => {setIsEdited(!isEdited)}}>
                  Отменить
                </S.BtnBor>
                <S.BtnBor onClick={deleteTask}>
                  Удалить задачу
                </S.BtnBor>
              </S.BtnGroup>
              <S.BtnBg>
                <Link to={routeObj.MAIN}><p>Закрыть</p></Link>
              </S.BtnBg>
            </S.PopBrowseBtnEdit>)}
            
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
export default PopBrowse;
