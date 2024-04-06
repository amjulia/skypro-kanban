import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";
import * as S from "./Login.styled"
import { Wrapper } from "../../styles/shared";
function Registration() {
  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin>
              <S.ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter
              >
                <Link to={routeObj.MAIN}>Зарегистрироваться</Link>{" "}
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={routeObj.LOGIN}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}
export default Registration;
