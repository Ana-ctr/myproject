import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../component/header"
import { useParams } from "react-router-dom"

function Lesson8() {
    let apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7'
    const [unique, setUnique] = useState()
    const [list, setList] = useState(1)
    const [specific, setspecific] = useState()
    let param = useParams()
  
  
    
        const GoIn = (p) => {
            setUnique(null)

            setList()
           

        }
        let specificF = async () => {
            let specificData = await axios({
                url: `https://fakestoreapi.com/products/category/${param.category}`,
                method: "get"
            })
            if (specificData != null) {
                if (specificData.status == 200) {
                    setspecific(specificData.data)
                }
            }
            console.log(specificData);
        }

        useEffect(() => {
            specificF()
            


        }, [])
        return (
            <div className="App">
                <header>
                <Header/>
                </header>
                <main>
                    <p>

                        <div class='row mt-5'>{specific != null ?
                            specific.map(i =>
                                <>

                                    <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2">
                                        <img width={'90%'} height={'280px'} src={i.image}></img>

                                        <a href={"/single.product/" + i.id}><h5>{i.title}</h5><h5>{i.price}</h5></a>
                                        
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

    export default Lesson8;