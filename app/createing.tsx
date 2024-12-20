"use client"
import React from 'react'
import { useState } from "react";



const Createing = () => {

    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
   const [author,setAuthor]=useState('hk')
   const [ispending,setIspending]=useState(false)
//const history=useHistory();

    const handleSubmit=(e:any)=>{

        e.preventDefault();
const blog={title,body,author};
setIspending(false)
console.log(blog)
fetch('http://localhost:3000/api/books',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(blog)
}).then(()=>{console.log("added");
//history.go(-1);
history.go('/');
})

    }

  return (
    <div className='bg-slate-400 content-center' >

    <h2>Add a new data</h2>
<form onSubmit={handleSubmit}>
<label>Blog tile:</label>
<input type="text"
required
value={title}
onChange={(e)=>setTitle(e.target.value)}
  />

<label>Blog body</label>
<textarea required value={body}
onChange={(e)=>setBody(e.target.value)}
  ></textarea>
<label>Blog author:</label>
<select value={author} onChange={(e)=>setTitle(e.target.value)}>
<option value="a">a</option>
<option value="b">b</option>
</select>
{!ispending && <button>Add Blog Submit</button>}
{ispending && <button> ...  Submit</button>}
</form>


</div>
  )
}

export default Createing
