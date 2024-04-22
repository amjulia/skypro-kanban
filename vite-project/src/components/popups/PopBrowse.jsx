import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "../calendar/Calendar";
import { routeObj } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTaskContext } from "../../contexts/hooks/useTask";
import { deleteTodo } from "../../api";
import { useState } from "react";
import { status, topicHeader } from "../../lib/topic";
import * as S from "../popups/PopBrowse.styled"

function PopBrowse() {
  const { id } = useParams();
  const { user } = useUserContext();
  const { cards, setCards } = useTaskContext();
  const card = cards.find((item) => item._id === id);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const [editTask, setEditTask] = useState({
    title: card.title,
    description: card.description,
    topic: card.topic,
    data: card.data,
    status: card.status,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  function deleteTask() {
    deleteTodo({ token: user.token, id })
      .then((responseData) => {
        setCards(responseData.tasks);
        navigate(routeObj.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Задача № {id}</h3>
              <S.CategoriesTheme $topicColor={topicHeader[card.topic]}>
                <p>{card.topic}</p>
              </S.CategoriesTheme>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <S.StatusThemes>
                {status.map((item, index) => {
                  return (
                    <S.StatusTheme
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

                {/* <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme">
                  <p>В работе</p>
                </div>
                <div className="status__theme ">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme">
                  <p>Готово</p>
                </div> */}
              </S.StatusThemes>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи: {card.title}
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  >
                    {card.description}
                  </textarea>
                </div>
              </form>

              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={deleteTask}
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={routeObj.MAIN}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={routeObj.MAIN}>Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopBrowse;
