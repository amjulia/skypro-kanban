import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styles/shared";
import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

function Header() {
  const {user} = useUserContext();
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
          <S.Button>
            <Link to={routeObj.NEWCARD}> <p>Создать новую задачу</p></Link>
          </S.Button>
          <S.HeaderUser onClick={ToggleDropdown} >
            {user.name}
          </S.HeaderUser>
          {isOpen && (
            <S.HeaderPop>
              <S.PopUserSetName>{user.name}</S.PopUserSetName>
              <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
              <S.ButtonExit>
                <Link to={routeObj.EXIT}><p>Выйти</p></Link>
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
