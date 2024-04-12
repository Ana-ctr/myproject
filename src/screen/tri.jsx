import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "../component/header";


function Lesson2() {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [movie, setmovie] = useState()
    const [page, setPage] = useState(1)
    const Thre = async () => {
        let Three = await axios({
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=' + page,
            method: "get"
        })


        if (Three.status == 200) {
            setmovie(Three.data.results)

        }

    }

    const GoTo = (p) => {
        setmovie(null)

        setPage(p)
        Thre();
    }



    useEffect(() => {
        Thre()
    }, [])
    return (
        <div className="App img2">
            <header>
                <Header />




            </header>
            <main>
                <p>

                    <button type="button " onClick={() => GoTo(1)}
                        class="btn-secondary so">1</button>

                    <button type="button" onClick={() => GoTo(2)}
                        class="btn-danger so">2</button>

                    <button type="button" onClick={() => GoTo(3)}
                        class="btn-danger so">3</button>

                    <button type="button" onClick={() => GoTo(4)}
                        class="btn-danger so">4</button>


                    <div class='row  mt-5'>{movie != null ?
                        movie.map(i =>
                            <>

                                <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2  mb-1  ms-5 col-lg-2">
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

export default Lesson2;
