const keyApi = "qbvZBIIcRgDkWWReYPptJS9hyOUnYJsI7BMlHhmr";
const Title = document.getElementById('title');
const Img = document.getElementById('img')
const Dates = document.getElementById('date')
const Explanation = document.getElementById('explanation')

let ApiNasa = async () => {
    try {
        let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${keyApi}`)
        console.log(res)

        if (res.status === 200) {            
            let data = await res.json();
            console.log(data)

            Title.innerHTML = data.title
            let imgHD = `${data.hdurl}`;
            let img = `${data.url}` 
            Img.src = imgHD;
            Dates.innerHTML = `Date: ${data.date}`
            Explanation.innerHTML = data.explanation

        } else if (res.status === 403) {
            console.log("Su key esta mal escrita o no es valida")
        } else if (res.status === 404) {
            console.log("No encontramos los resultados")
        } else {
            console.log("No sabemos que ocurrio, trata de reiniciar la pagina")
        }

    } catch (error) {
        console.log(error)
    }
}

function Reloj() {
    DateNow = new Date()
    h = DateNow.getHours()
    m = DateNow.getMinutes()
    s = DateNow.getSeconds()

    var DatePrint = h + ":" + m + ":" + s
    document.formReloj.reloj.value = DatePrint
    setTimeout(`Reloj()`, 1000)
}

ApiNasa();