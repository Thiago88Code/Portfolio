import { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

import { Icons } from './Icons'
import styled from "styled-components"

const Container = styled.div`
    height: 80vh;
    text-align: center;
    align-items: center;
    padding: 50px;
    font-size: 120px;
`

export function Header() {

    const ref = useRef<ReturnType<typeof setTimeout>[]>([])
    const [items, set] = useState<any[]>([])
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(60px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 100, innerHeight: 80 },
            { transform: 'perspective(1200px) rotateX(0deg)', color: '#28b4d7' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28d79f' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Thiago', 'Souza', 'Web Developer']), 2000))
        ref.current.push(setTimeout(() => set(['Thiago', 'Web Developer']), 5000))
        ref.current.push(setTimeout(() => set(['Thiago', <Icons />, 'Web Developer']), 8000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    return (
        <>
            <Container>
                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div style={rest} onClick={reset}>
                        <animated.div style={{ height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </Container>
        </>
    )

}