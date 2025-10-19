import { useState } from "react";

export function Counter() {
    let [Counter, setCount] = useState(15)

    const addValue = () => {
        // Counter=Counter+1
        setCount(PreCount => PreCount + 1)
        setCount(PreCount => PreCount + 1)
        setCount(PreCount => PreCount + 1)
        setCount(PreCount => PreCount + 1)
        setCount(PreCount => PreCount + 1)
        setCount(PreCount => PreCount + 1)
    }
    const removeValue = () => {
        Counter = Counter - 1
        setCount(Counter)
    }
    return (
        <>
            <h1>Counter Value: {Counter}</h1>
            <button onClick={addValue}>Add Value</button>
            <button onClick={removeValue}>Remove Value</button>

        </>
    )
}