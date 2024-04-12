import axios from "axios";
import { useEffect, useState } from "react";

function Lesson6() {
    const [product, setProduct] = useState()
    const [category, setCategory] = useState()



    let credo = async () => {
        let product = await axios({
            url: `https://fakestoreapi.com/products`,
            method: "get"

        })


        if (product.status == 200) { setProduct(product.data) }
        console.log(product);
    }

        let divide = async () => {
            let category = await axios({
                url: `https://fakestoreapi.com/products/categories`,
                method: "get"

            })


            if (category.status == 200) { setCategory(category.data) }
            console.log(category);


        }
        useEffect(() => {
            credo()
            divide()
        }, [])
        return (
            <>
                <div class='row mt-5'>{product != null ?
                    <> {product.map(i =>

                        <div className="col-6 col-md-4">
                            <img width={'90%'} height={'280px'} src={i.image}></img>

                            <a href={"/single.product/" + i.id}><h5>{i.title}</h5></a>
                            <p>{i.price}</p> <p>{i.description}</p>
                        </div>




                    )}
                    </>
                    : <>loading</>
                }
                </div>

                <div class='row mt-5'>{category != null ?
                    <> {category.map(i =>

                        <div className="col-6 col-md-4">
                            

                            <a href={"category/" + i}><h5>{i}</h5></a>
                    
                        </div>




                    )}
                    </>
                    : <>loading</>
                }
                </div>


            </>
        )

    
}
    export default Lesson6