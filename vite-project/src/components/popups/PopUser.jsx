import { Link, useNavigate } from "react-router-dom";
import { ButtonPopExitNo, ButtonPopExitYes, PopExit, PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitTtl } from "./PopUser.styled";
import { routeObj } from "../../lib/const";

function PopUser() {
  
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form  id="formExit" action="#">
            <PopExitFormGroup>
              <ButtonPopExitYes >
              <Link to={routeObj.LOGIN}>Да, выйти</Link>
              </ButtonPopExitYes>
              <ButtonPopExitNo >
              <Link to={routeObj.MAIN}>Нет, остаться </Link>
              </ButtonPopExitNo >
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}
export default PopUser;
