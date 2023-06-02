import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    gap:5px;


    h1{

        font-weight: 400;

    }

    button {
        margin-bottom: 100px;
    }

    `
const Modal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 35px;
    border: 2px solid;
    padding:25px;
    border-radius: 8px;
    width: 50%;
    margin-top:50px;
    margin-bottom:50px;


    margin-left: 15px;
    align-self: center;

    
    text {
        font-weight: 400;
        text-align: justify;
    }

 
`

export function About() {

    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)

    }

    useEffect(() => {
        if (toggle) {
            window.scrollBy({
                top: 200,
                behavior: 'smooth'
            });
        }
    }, [toggle])

    return (
        <Container>
            <button onClick={handleToggle}>about me</button>
            {toggle &&
                <Modal>
                    <text>
                        kkkkkkkjbhjbjbjbnknknlknlknlknlknlknjvbjhvbjhbj
                        hbjhbjhbjhbjbjhbjhbjhbjbjhb
                        jbvjvjbjhbhjbhjbhjbhjbjbjbjbjbjhbjbjhhb
                    </text>
                </Modal>
            }
        </Container>
    )
}