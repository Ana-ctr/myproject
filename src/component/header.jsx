import axios from "axios"
import { useState } from "react"

const Header = () => {
    const [inp, setSearch] = useState()
    const [searchState, setSearchState] = useState(null)
    const [PersonSearch, setPersonSearch] = useState(null)
    const [MovieSearch, setMovieSearch] = useState(null)
    let SearchF = async () => {
        let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
        let searchData = await axios({
            url: `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=en-US&query=${inp}&page=1&1include_adult=false`


        })
        if (searchData != null) {
            setSearchState(searchData.data.results)
            let movie = searchData.data.results.filter(i => i.media_type == 'movie')
            setMovieSearch(movie)
            let person = searchData.data.results.filter(i => i.media_type == 'person')
            setPersonSearch(person)


        }

        console.log(searchData);
    }



    return (
        <div>

            < nav class="navbar navbar-expand-lg so" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">TMDB</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Главное</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/tri">Популярные</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pyat">Люди</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sem">Сериалы</a>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="input me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} onInput={SearchF} />
                            <button class="btn btn-outline-dark" type="submit" onClick={SearchF}>Search</button>
                        </form>


                    </div>
                </div>
            </nav >
            {searchState != null ? <>

                <div className="col-12 search">

                    {PersonSearch != null ? PersonSearch.map(item => <>
                        <h6 className="my-3"> <i class='fa-solid-fa-user mx=3'></i> <a href={"/shest/"+item.id}> {item.name} </a></h6>

                    </>) : <></>}
                    {MovieSearch != null ? MovieSearch.map(i=> <>
                        <h6 className="my-3"> <i class='fa-solid-fa-video mx=3'></i> <a href={"/detail/"+i.id}> {i.title} </a></h6>

                    </>) : <> </>}

                </div>
            </> : <></>}
        </div>


    )
}
export default Header