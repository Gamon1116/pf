import React, {useState} from 'react'
export function Header({onContactClick}:{onContactClick:()=>void}) {
 const [open,setOpen]=useState(false)
 const links=[['projects','프로젝트'],['experience','경력'],['skills','기술'],['about','소개']]
 return <header className="site-header"><div className="shell header-inner"><a className="wordmark" href="#top">Son Jung-Woo<span>.</span></a><button className="menu-toggle" aria-label={open?'메뉴 닫기':'메뉴 열기'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'닫기':'메뉴'}</button><nav id="navigation" className={open?'navigation is-open':'navigation'} aria-label="주 메뉴">{links.map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}<button onClick={()=>{setOpen(false);onContactClick()}}>연락하기 ↗</button></nav></div></header>
}
