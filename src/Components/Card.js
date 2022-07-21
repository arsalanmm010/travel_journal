import location from './Images/location.webp'

export default function Card(props) {
  return (
    <div className='card'>
      <section>
        <img src={props.item.imageURL} alt="" className='card-img'/>
      </section>
      <section className='s2'>
        <span className='spn'>
          <img src={location} alt="" className='loc-icon'/>
          <p className='country'>{props.item.location}</p>
          <p className='maps'><a href={props.item.map}>View on Google Maps</a></p>
        </span>
        <h1 className='name-img'>{props.item.title}</h1>
        <p className='date'>{props.item.date}</p>
        <p className='description'>{props.item.description}
        </p>
        </section>
    </div>
  )
}
