import styled from "styled-components"


const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:50px;
    padding: 80px 0;

    img {
        border-radius:15px;
        width:50px;
    }
`

export function Icons() {

    return (
        <IconsContainer>
            <img src="src\assets\14678610731551953708-64.png" alt="" />
            <img src="src\assets\8804286661557996995-64.png" alt="" />
            <img src="src\assets\632690741557997006-64.png" alt="" />
            <img src="src\assets\20167174151551942641-64.png" alt="" />
        </IconsContainer>
    )
}