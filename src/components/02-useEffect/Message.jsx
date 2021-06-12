import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect(() => {
        console.log('Componente montado')
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoords(coors)
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componente desmontado')
        }

    }, [])


    return (
        <div>
            <div>
                <h3>x:{x} y: {y}</h3>
            </div>
        </div>
    )
}

export default Message
