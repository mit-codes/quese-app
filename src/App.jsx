import { useState } from 'react'

function App() {
    const allQution = [
        {
            qution: "Who wrote the book “Discovery of India”?",
            option: ["Rabindranath Tagore ", "Jawaharlal Nehru ", "B. R. Ambedkar ", "Swami Vivekananda "],
            currectAns: "Jawaharlal Nehru "
        },
        {
            qution: "Which country is called the Land of the Rising Sun?",
            option: ["China 🇨🇳", "Japan 🇯🇵", "South Korea 🇰🇷", "Thailand 🇹🇭"],
            currectAns: "Japan 🇯🇵 "
        }
    ]

    const [result, setResult] = useState(null)

    const [currentQution, seturrentQution] = useState(0)

    const ansClike = (ele) => {
        if (ele == allQution[currentQution].currectAns) {
            nextBtn()
            setResult("your anser is rignt : " + allQution[currentQution].currectAns)

        } else {
            setResult("your anser is wrong , right answer is  : " + allQution[currentQution].currectAns)
        }
    }


    const nextBtn = () => {
        let btnSec = document.getElementById("btnsec")
        console.log(btnSec)

        
        let btn = document.createElement("button")
        console.log(btn)
        
        btn.textContent = " next > "

        btnSec.append(btn);

    }

    return (
        <>
            <h1> quize App </h1>
            {currentQution + 1}
            {allQution[currentQution].qution}

            <ol type='A'>
                {allQution[currentQution].option.map((ele, idx) => {
                    return <li key={idx} onClick={(e) => { ansClike(e.target.textContent) }}>{ele}</li>
                })}
            </ol>

            <div id="btnsec">
                {result}
            </div>

        </>


    )
}

export default App
