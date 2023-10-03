import './navagation.scss'

function navagation() {

  return (
    <>
        <nav className='navagation'>
                <h2 className='navagation__name'>MATTHEW.</h2>      
            <div className='navagation__middle'>
                <h2 className='navagation__middle-item'>Intro</h2>
                <h2 className='navagation__middle-item'>About</h2>
                <h2 className='navagation__middle-item'>Works</h2>
                <h2 className='navagation__middle-item'>Contact</h2>
            </div>
            <div className='navagation__social'>
                <h2 className='navagation__social-item'>X</h2>
                <h2 className='navagation__social-item'>Meta</h2>
                <h2 className='navagation__social-item'>Instagram</h2>
            </div>
        </nav>
    </>
  )
}

export default navagation