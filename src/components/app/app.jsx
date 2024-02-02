import Nav from "../nav/nav";
import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";

function App() {
    return (
        <PageWrapper>
            <StyledHeader>ВReacte</StyledHeader>
            <StyledNavWrapper>
                <Nav />
            </StyledNavWrapper>
            <StyledMain>            </StyledMain>
            <StyledFooter>Footer</StyledFooter>
        </PageWrapper>
    )
}

export default App;