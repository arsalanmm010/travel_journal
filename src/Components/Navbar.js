import world from './world.png'

export default function Navbar() {
  return (
    <div className='nav'>
        <img src={world} alt="" className='icon'/>
        <h4 className='navp'>my travel journal.</h4>
    </div>
  )
}
