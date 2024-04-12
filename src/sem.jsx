import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "./component/header";


function Lesson9() {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [serie, setserie] = useState()
    const [page, setPage] = useState(1)
    const Serial = async () => {
        let Three = await axios({
            url: 'https://api.themoviedb.org/3/tv/airing_today?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=en-US&page=' + page,
            method: "get"
            
        })

        console.log(Three);

        if (Three.status === 200) {
            setserie(Three.data.results)

        }

    }

    const GoTo = (p) => {
        setserie(null)

        setPage(p)
        Serial();
    }



    useEffect(() => {
        Serial()
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


                    <div class='row  mt-5'>{serie != null ?
                        serie.map(i =>
                            <>

                                <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2  mb-1  ms-5 col-lg-2">
                                    <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />

                                    <a href={"/vosem/" + i.id}><h5>{i.name}</h5></a>
                                    <p>{i.first_air_date}</p>
                                    
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

export default Lesson9;
