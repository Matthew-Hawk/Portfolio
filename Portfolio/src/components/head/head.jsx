import './head.scss'
import Astro from '../../assets/astro.jpg'

function head() {

  return (
    <section className='head'>
      <h1 className='head__name'>Matthew</h1>
      <h2 className='head__title'>Cloud Architect + Web Developer</h2>
      <div className='head__imgDiv'>
        <img className='img' src={Astro} alt="astronaught in space" />
      </div>
    </section>
  )
}

export default head