import React, {useState} from 'react'
import BucketItem from './BucketItem';



export default function BucketList() {
    const [tasks, setTasks] = useState(["Ski in Japan", "Run a half marathon", "Surf in Baja"])
    return (
      <div>
        <ul>
            {tasks.map((item,i)=><BucketItem key={i} task={item}/>)}
        </ul>
      </div>

    );
  }
  
 