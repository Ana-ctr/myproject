import { useState } from "react";
import axios from "axios";


const Work = () =>{
    const [n, setN] = useState(null);
const [names, setNames] = useState(null);
const fetchResult = async () => {
    const detail = await axios ({
        url: 'https://api.genderize.io',
        method: 'get',
        params: {
            name: n
        },
    });
    console.log('data', detail);
    if (detail.status == 200) {
        setNames(detail.data);
    }
}
return (<>
    
    <div className="col-12">
        <input type="text" onChange={(e) => setN(e.target.value)} />
        <button onClick={fetchResult}>Get Data</button>
    </div>
{
    names!=null ?
    <>
        
            <>
                <p>Country:{names.count}</p>
                <p>Country:{names.gender}</p>
            
            


                <p>Probability:{names.probability}</p>
            </>
        
        

    </>
    :
    <>


    </>

}
</>)
}

export default Work;