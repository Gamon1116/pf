import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
function App() {
 const contact = () => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
 const projects = () => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})
 return <><a className="skip-link" href="#main">본문으로 이동</a><Header onContactClick={contact}/><main id="main"><Hero onContactClick={contact} onProjectsClick={projects}/><Projects/><Experience/><Skills/><About/><Contact/></main><Footer/></>
}
export default App
