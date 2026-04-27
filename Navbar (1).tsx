import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:15,background:'#111827'}}>
      <h3>GROE AI</h3>
      <div style={{display:'flex',gap:10}}>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}
