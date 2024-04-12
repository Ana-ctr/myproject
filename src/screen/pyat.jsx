import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "../component/header";

function Lesson4() {
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
                url: 'https://api.themoviedb.org/3/person/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-US&page='+page,
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
            <div className="App img2">
                <header>
                <Header/>
                </header>
                <main>
                    <p>
                    <u><h5>Популярные люди</h5></u>

                        <div class='row mt-5 d-flex'>{movie != null ?
                            movie.map(i =>
                                <>

                                    <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 ms-5 mb-1 col-lg-2">
                                        <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.profile_path}`} alt="" /> <br /> <br />

                                        <a href={"/shest/" + i.id}><h5>{i.name}</h5></a>
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

    export default Lesson4;