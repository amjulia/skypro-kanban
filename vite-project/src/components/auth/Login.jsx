import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { Wrapper } from "../../styles/shared";
import * as S from "../auth/Login.styled";
import { loginToDos } from "../../api";
import { useState } from "react";
import { useUserContext } from "../../contexts/hooks/useUser";

function Login() {
  const { userLogin } = useUserContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginTodoClick = async () => {
    try {
      await loginToDos(login, password).then((responseData) => {
        userLogin(responseData.user);
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход </h2>
            </S.ModalTtl>
            <S.ModalFormLogin>
              <S.ModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
              />
              <S.ModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <S.ModalBtnEnter type="button" onClick={handleLoginTodoClick}>
                <Link to={routeObj.MAIN}>Войти</Link>
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routeObj.REGISTER}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}
export default Login;
