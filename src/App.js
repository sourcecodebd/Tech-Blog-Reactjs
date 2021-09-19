import { useEffect, useState } from 'react';
// import blogs from './blogs.json';
// import blogsObj from './blogs.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Mobile />
      <TechBlogs />
    </div>
  );
}

function TechBlogs() {
  const [blog, setBlog] = useState([])

  // using .then
  /*   useEffect(() => {
      fetch('https://sourcecodebd.github.io/API-by-nafi/')
        .then(res => res.json())
        .then(data => setBlog(data))
  
      // setBlog(blogs);
      // setBlog(blogsObj);
    }, []); */

  // using async-await
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://sourcecodebd.github.io/API-by-nafi/');
      const data = await res.json();
      setBlog(data);
    }
    fetchData();

    // setBlog(blogs);
    // setBlog(blogsObj);
  }, []);

  return (
    <div className="card container">
      <h1>Web Blog</h1>
      <h3 style={{ color: 'yellow' }}><span style={{ color: 'lightgreen' }}>Total Blogs:</span> {blog.length}</h3>
      <a href="/"><button className="btn-custom btn-cyan">Refresh</button></a>
      <div className="grid">
        {
          blog.map((bl, i) => <ShowBlogs title={bl.title} desc={bl.desc} img={bl.imgTech} key={i} />)
        }
      </div>
    </div>
  );
}

function ShowBlogs(props) {
  const cardStyle = {
    color: 'grey',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 4px 8px',
    margin: '10px',
    borderRadius: '5px',
    padding: '10px'
  }
  const { title, desc, img } = props;
  return (
    <div style={cardStyle} className="card">
      <h1>{title}</h1>
      <div className="justify">
        <p>{desc.slice(0, 250)}</p>
        <img src={img} className="img-fluid" alt={title} />
      </div>
    </div>
  );
}


function Mobile() {
  const [level, setLevel] = useState(100);
  const decreaseLevel = () => level > 0 ? setLevel(level - 10) : level;
  return (
    <div className="card">
      <h1>Show Battery Percentage</h1>
      <h3 style={{ color: 'yellow' }}><span style={{ color: 'lightgreen' }}>Battery Level:</span> {level}</h3>
      <button onClick={decreaseLevel} className="btn-custom btn-red">Battery Down</button>
    </div>
  );
}

export default App;
