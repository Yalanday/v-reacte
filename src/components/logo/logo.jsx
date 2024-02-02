import { StyledLogo } from "./style";
import LogoImage from '/src/assets/react.svg';

function Logo() {
    return (
        <StyledLogo href="#">
            В<img src={LogoImage} alt="Логотип" />Reacte
        </StyledLogo>
    )
}

export default Logo;