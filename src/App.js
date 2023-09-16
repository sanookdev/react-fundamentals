import { useState } from "react";

function App() {
  // create state for set count

  const [students,setStudent] = useState([
    {id:1,name:"Nook"},
    {id:2,name:"Kwang"},
    {id:3,name:"News"},
    {id:4,name:"Guess"},
    {id:5,name:"Songkarn"}
  ]);

  const [show,setShow] = useState(true); 
  // if ture display content, false hide content

  function deleteStudent(id){
    setStudent(students.filter(item=>item.id !== id))
  }
  
  // Display area
  return (
    <> 
       <h1>Number of students : {students.length}</h1>
       <h2>{show}</h2>
       <button onClick={()=>setShow(!show)}>Toggle</button>
       <ul>
        {show && students.map((item)=>(
          <li key = {item.id}>
            <p>{item.id} - {item.name}</p>
            <button onClick = {()=>deleteStudent(item.id)}>Delete</button>
          </li>
        ))}
       </ul>

       <input type="text" />
       <button onClick = {() => setStudent()}>Add</button>
    </>
  );
}

export default App;
