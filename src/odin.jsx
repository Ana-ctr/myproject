import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "./component/header";

function Lesson() {
  let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
  const [movie, setmovie] = useState()
  const [moviTrend, setMoviTrend] = useState()
  const [Trend, setTrend] = useState()
  let Thre = async () => {
  let Three = await axios({
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1',
    method: "get"
  })

if (Three != null) {
  if (Three.status == 200) {
    setTrend(Three.data.results)
  }
}}

  let movieF = async () => {
    let movieData = await axios({
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1',
      method: "get"
    })
    if (movieData != null) {
      if (movieData.status == 200) {
        setmovie(movieData.data.results)
      }
    }
    console.log(movieData);
  }
  let trendF = async () => {
    let trendData = await axios({
      method: "get",
      url: ` https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1

        `

    })
   
if (trendData != null) {
  if (trendData.status == 200) {
    setMoviTrend(trendData.data.results)
  }
}}


useEffect(() => {
  movieF()
  trendF()
  Thre()
}, [])
return (
  <div className="App  text-dark img">
    <header>

     <Header/>
      <h1>Добро пожаловать </h1>
      <h4>в мир фильмов, сериалов и людей.
         Исследуйте сейчас</h4>

    </header>
    <main>
      <p>
        <u><h5>Что популярно</h5></u>
        <div class='d-flex ex1 mt-5'>{movie != null ?
          movie.map(i =>
            <>

              <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2  mb-1 col-lg-2">
                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>
                <p>{i.release_date}</p>
              </div>

            </>

          ) : <>loading</>}

        </div>

      </p>
      <p>
        <u><h5>В тренде</h5></u>
        <div class='d-flex ex1 mt-5 text '>{moviTrend != null ?
          moviTrend.map(i =>
            <>

              <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2  mb-1 col-lg-2">
                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>
                <p>{i.release_date}</p>
              </div>

            </>

          ) : <>loading</>}

        </div>
      </p>
      <p>
        <u></u>
        <div class='d-flex ex1 mt-5'>{moviTrend != null ?
          moviTrend.map(i =>
            <>

              <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2  mb-1 col-lg-2">
                <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>
                <p>{i.release_date}</p>
              </div>

            </>

          ) : <>loading</>}

        </div>
      </p>
      <p>
        <u><h5>Cейчас смотрят</h5></u>
        <div class='d-flex ex1 mt-5'>
          {Trend != null ?
            Trend.map(i =>
              <>

                <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mb-1 col-lg-2">
                  <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                  <a href={"/detail/" + i.id}><h5>{i.title}</h5></a>
                  <p>{i.release_date}</p>
                </div>

              </>

            ) : <>loading</>}

        </div>
      </p>
    </main>
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  </div>
);
}

export default Lesson;
