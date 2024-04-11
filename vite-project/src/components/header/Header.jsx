import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared";
import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";

function Header({onCardAdd, user}) {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleDropdown = () => setIsOpen((prevState) => !prevState);

    return (
    <S.Header>
    <Container>
      <S.HeaderBlock>
        <S.HeaderLogo>
             <Link to="/"><img src="images/logo.png" alt="logo" /> </Link>
        </S.HeaderLogo>
             <S.HeaderNav>
          <S.Button
            id="btnMainNew"
            onClick={onCardAdd}
          >
            <a href="#popNewCard">Создать новую задачу</a>
          </S.Button>
          <S.HeaderUser onClick={ToggleDropdown} >
            {user}
          </S.HeaderUser>
          {isOpen && (
            <S.HeaderPop>
              <S.PopUserSetName>{user}</S.PopUserSetName>
              <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
              <S.PopUserSetTheme>
                <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
                <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
              </S.PopUserSetTheme>
              <S.ButtonExit>
                <Link to={routeObj.EXIT}>Выйти</Link>
              </S.ButtonExit>
            </S.HeaderPop>
          )}
        </S.HeaderNav>
      </S.HeaderBlock>
    </Container>
    </S.Header>
  );
}

export default Header;
