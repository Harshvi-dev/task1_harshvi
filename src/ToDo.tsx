import React, { useEffect, useState } from 'react'
interface Task {
    id:number,
    title:string
}

const ToDo = () => {
    const [tasks,setTasks] = useState<Task[]>([])
    const[name,setName] = useState<string>("")
    var num =0;
    function getTask(e:any) {
        setName(e.target.value)
    }
    function addTask() {
        console.log("title: "+name)
        const tempTask = {
            id:num++,
            title:name
        }
        setTasks([...tasks,tempTask])
        console.log("task :"+JSON.stringify(tasks))
        setName('');
    }
    function delTask(id:any) {
        console.log("id" + id)
        var demo = [...tasks];
        demo.splice(id,1);
        setTasks(demo)

    }
  return (
    <>
        <label>Enter task : </label>
        <input type="text" onChange={getTask} />
        <button onClick={addTask}>ADD</button>
        {tasks.map((items, index) => (
                <div key={index}>
                    <li>
                        <span>{items.title}</span>
                        <button onClick={()=>delTask(items.id)} >del</button>
                    </li>
                </div>
            ))}
    </>
    
  )
}

export default ToDo