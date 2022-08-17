import React,{useEffect,useState} from 'react'
import '../App';


 const Table = () => {

    const [arrays , setArrays] = useState([])
    const [error , setError] = useState (false)
    const [isLoading , setIsLoading] = useState(false)
   
    useEffect(()=>{
      
     const getFetch = async () => {
       setIsLoading(true)
       const response = await fetch('https://http-34fc8-default-rtdb.firebaseio.com/datas.json')
       
       const responseData = await response.json()

       const major = []
      
        for(let key in responseData){
            major.push({
              taskId:responseData[key].taskId,
              taskName:  responseData[key].taskName,
              taskStatus:responseData[key].taskStatus,
              parentId:responseData[key].parentId
            })
        }
       
        setArrays(major)

        setIsLoading(false)
     }   
      
     getFetch().catch(error =>setError(true) )

    }, [])


    function handleRemoveItem(e) {

        const name = e.target.getAttribute("name")
        setArrays(arrays.filter(item => item.taskName !== name));
        
    }


  return (
    <div>
        {isLoading && !setError && <p className='d-flex justify-content-center text-danger'>Loading...</p> }
        {error && <p className='d-flex justify-content-center text-danger'>Something went wrong...</p>}
      

           <table className="table">
           <thead>
             <tr>
               <th scope="col">Test Name</th>
               <th scope="col">Status</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
        
               
                {
                    arrays.map(arr=>(
                        <tr key={arr.taskId}>
                            <td>{arr.taskName}</td>
                            <td>{arr.taskStatus}</td>
                            <td><button  onClick={handleRemoveItem} name={arr.taskName}   className='me-1 btn btn-danger'>Delete</button><button className='ms-1 btn btn-success'>Start</button></td>
                        </tr>
                        ))
                }
            
             <tr>
             
             </tr>
           </tbody>
           </table>

    </div>
  )
}

export default Table;
