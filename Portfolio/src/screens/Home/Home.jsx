import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content/Content'
import About from '../../components/About/About'
import Tech from '../../components/Tech/Tech'
import Projects from '../../components/Projects/Projects'
import axios from "axios"
import Contact from '../../components/Contact/Contact'



export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos().then((data) => setRepos(data));
  }, []);

  const fetchRepos = async () => {
    const res = await axios.get(
      "https://api.github.com/users/honey2310/repos"
    );
    return res.data;
  };


 return (
    <div>
      <Navbar/>
      <Content/>
      <About/>
      <Tech/>
      <Projects repos={repos}/>
      <Contact/>
    </div>
  )
}
