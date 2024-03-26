import { useState } from "react";
import * as S from "./Header.styled";

function Header({ onCardAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <S.Header>
    <S.Container>
      <S.Header__block>
        <div className="header__logo _show _light">
          <a href="" target="_self">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _dark">
          <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
        </div>
        <S.Header__nav>
          <S.Button
            id="btnMainNew"
            onClick={onCardAdd}
          >
            Создать новую задачу
          </S.Button>
          <S.Header__user onClick={ToggleDropdown} >
            Ivan Ivanov
          </S.Header__user>
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
        </S.Header__nav>
      </S.Header__block>
    </S.Container>
    </S.Header>
  );
}

export default Header;
