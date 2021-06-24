import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BlogPost = (props) => {

  const [test, setTest] = useState("")








  return (

    <div>
      <button onClick={() => { console.log(props.match.params.id) }} style={{ color: "red" }}>Hola</button>

    </div>
  )


}

export default BlogPost;