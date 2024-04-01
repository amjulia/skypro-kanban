import { ButtonPopExitNo, ButtonPopExitYes, PopExit, PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitTtl } from "./PopUser.styled";

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
              <ButtonPopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </ButtonPopExitYes>
              <ButtonPopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </ButtonPopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}
export default PopUser;
