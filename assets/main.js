const keyApi = "qbvZBIIcRgDkWWReYPptJS9hyOUnYJsI7BMlHhmr";
const Title = document.getElementById('title');
const Img = document.getElementById('img')
const Dates = document.getElementById('date')
const Explanation = document.getElementById('explanation')
const Copyright = document.getElementById('copyright')

let ApiNasa = async () => {
    try {
        let res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${keyApi}`)
        console.log(res)

        if (res.status === 200) {            
            let data = await res.json();
            console.log(data)

            Title.innerHTML = data.title
            let imgHD = `${data.url}`;
            let img = `${data.url}` 
            Img.src = imgHD;
            Dates.innerHTML = data.date
            Explanation.innerHTML = data.explanation
            Copyright.innerHTML = data.copyright

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

ApiNasa();