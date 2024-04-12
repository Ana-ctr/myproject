import axios from "axios"
import { image } from "fontawesome"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Lesson7() {
    const [single, setSingle] = useState()
    let param = useParams()


    let productF = async () => {
        let singleData = await axios({
            url: `https://fakestoreapi.com/products/${param.id}`,
            method: "get"

        })

        console.log('single', singleData);

        setSingle(singleData.data)

    }
    useEffect(() => {

        productF()
    }, [])
    return (
        <>
            <div class='row mt-5'>{single != null ?

                <>

                    <div className="col-6 col-md-4 block p-2 mx-2 rounded-3 my-2 mt-3 mb-1 col-lg-2">
                        <img width={'90%'} height={'280px'} src={single.image}></img>

                        <a href={"/single.product/" + single.id}><h5>{single.category}</h5></a>
                        <p>{single.description}</p><p>{single.price}</p>
                    </div>

                </>

                : <>loading</>}

            </div>

        </ >

    )
}



export default Lesson7