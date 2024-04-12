import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "../component/header";

function Lesson3() {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [movie, setmovie] = useState()
    const [page, setPage] = useState(1)
  
    
        const GoTo = (p) => {
            setmovie(null)

            setPage(p)
            movieF()

        }
        let movieF = async () => {
            let movieData = await axios({
                url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=en-US&page='+page,
                method: "get"
            })
            if (movieData != null) {
                if (movieData.status == 200) {
                    setmovie(movieData.data.results)
                }
            }
            console.log(movieData);
        }

        useEffect(() => {
            movieF()
            


        }, [])
        return (
            <div className="App">
                <header>
                    
                    <Header/>


                    <button type="button" onClick={() => GoTo(1)}
                        class="btn-danger">1</button>

                    <button type="button" onClick={() => GoTo(2)}
                        class="btn-danger">2</button>

                    <button type="button" onClick={() => GoTo(3)}
                        class="btn-danger">3</button>

                    <button type="button" onClick={() => GoTo(4)}
                        class="btn-danger">4</button>

                </header>
                <main>
                    <p>

                        <div class='row  mt-5'>{movie != null ?
                            movie.map(i =>
                                <>

                                    <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2">
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

    export default Lesson3;