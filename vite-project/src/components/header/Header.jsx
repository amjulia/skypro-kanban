import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared";

function Header({ onCardAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <S.Header>
    <Container>
      <S.HeaderBlock>
        <S.HeaderLogo>
             <img src="images/logo.png" alt="logo" />
        </S.HeaderLogo>
        {/* <div className="header__logo _dark">
          <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
        </div> */}
        <S.HeaderNav>
          <S.Button
            id="btnMainNew"
            onClick={onCardAdd}
          >
            Создать новую задачу
          </S.Button>
          <S.HeaderUser onClick={ToggleDropdown} >
            Ivan Ivanov
          </S.HeaderUser>
          {isOpen && (
            <S.HeaderPop
               className="pop-user-set"
               id="user-set-target"
            >
              <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
              <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
              <S.PopUserSetTheme>
                <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
                <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
              </S.PopUserSetTheme>
              <S.ButtonExit >
                <a href="#popExit">Выйти</a>
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
