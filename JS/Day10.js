var word = document.querySelector('.word')
var time = document.querySelector('.time')
let seconds = 30
var input = document.querySelector('.input-text')
const reset = document.querySelector('.refresh-btn')
const submit = document.querySelector('.submit-btn')

function scrambledWord(){
    let words=[ 'BLACK SABBATH', 'IRON MAIDEN', 'METALLICA', 'JUDAS PRIEST', 'SLAYER', 
                'PANTERA', 'MEGADETH', 'MOTÖRHEAD', 'TOOL', 'DEATH', 
                'SYSTEM OF A DOWN', 'OPETH', 'ANTHRAX', 'DIO', 'SLIPKNOT']

    var wordObtain = words[Math.floor(Math.random() * words.length)]
    let RandomWordString = wordObtain.split('')

    function shuffleArray(array){
        for (var i = RandomWordString.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1))
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp}
        return array
    }

    function show(){
        var scrambledWord = shuffleArray(RandomWordString)
        word.innerHTML = scrambledWord.join('')}

    show()

    time.innerHTML = `TIME LEFT: ${seconds}s`

    const countdown = setInterval(() => {
        seconds--
        time.innerHTML = `TIME LEFT: ${seconds}s`
        submit.addEventListener('click', () =>{
            var x = input.value.toUpperCase()
            if (x == ''){
                alert('Please Enter Something')
                countdown()
            }else if (x == wordObtain){
                wordObtain =! x
                alert('You Found The Correct Word')
                document.location.reload()
                scrambledWord() 
            }
        })
        if (seconds === 0){
            clearInterval(countdown)
            alert('Your Time Is Over')
            document.location.reload()
        }
    }, 1000)
}

window.addEventListener('load', scrambledWord)

reset.addEventListener('click', () =>{
    scrambledWord()
    document.location.reload()
})
