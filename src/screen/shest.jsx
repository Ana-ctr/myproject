import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../component/header"

function Lesson5() {
    const [person, setPerson] = useState()
    const [credits, setCredits] = useState()
    let param = useParams()
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'

    let PersonItemF = async () => {
        let personData = await axios({
            url: `https://api.themoviedb.org/3/person/${param.id}?api_key=${apikey}&language=en-US`,
            method: "get"

        })
        console.log(personData);

        if (personData.status === 200) {
            setPerson(personData.data)

        }
    }

    let credisF = async () => {
        let creditsData = await axios({
            url: `https://api.themoviedb.org/3/person/${param.id}/movie_credits?api_key=${apikey}&language=ru-RU`,
            method: "get"

        })

        console.log('credits', creditsData);

        setCredits(creditsData.data.cast)

    }

    useEffect(() => {
        PersonItemF()
        credisF()
    }, [])
    return (

        <div className="App img">
            <header>
                <Header/>
            </header>

            <p>
                
                <div class='row mt-5'>{person != null ?

                    <>

                        <div className="col-4 b rounded-3 ">

                            <img width={'90%'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${person.profile_path}`} alt="" /> <br /> <br />

                            <a href={"/shest/" + person.id}><h5>{person.name}</h5></a>
                            <p>{person.birthday}</p>
                        </div>
                        <div className="col-8">
                            <p>{person.biography}</p><p>{person.credits}</p>
                            <div className="row my-auto fs-5">

                                <p><p />
                                    <div className="row exo">

                                        {credits != null ?
                                            credits.map(i =>
                                                <>

                                                    <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2">
                                                        <img width={'90%'} height={'280px'} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${i.poster_path}`} alt="" /> <br /> <br />


                                                    </div>

                                                </>

                                            ) : <>loading</>}

                                    </div>
                                </p>

                            </div>
                        </div>

                    </>

                    : <>loading</>}
                </div>



            </p>
        </div>


    )
}



export default Lesson5