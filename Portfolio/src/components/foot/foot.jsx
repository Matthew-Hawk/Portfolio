import './foot.scss'

function foot() {

  return (
    <footer className='footer'>
        <section className='footer__top'>
            <h3 className='footer__top-cph'>Feel free to reach out if you want to collaborate with me,or simply have a chat.</h3>
        </section>

        <section className='footer__bottom'>
            <div className='bottom__left'>
                <p className='bottom__left_text'>
                    Lorem ipsum dolor sit amet consectetur. Ipsum etiam est ac hendrerit quis bibendum ornare. Morbi ac massa fames cras.
                </p>
                <button className='bottom__left__button1'>Say Hello</button>
                <br />
                <button className='bottom__left__button2'>Resume</button>
            </div>

            <div className='bottom__right'>
                <div>
                    <h3 className='bottom__right__title'>START A PROJECT</h3>
                    <h3 className='bottom__right__text'>matthawkins44@gmail.com</h3>
                    <h3 className='bottom__right__text'>979-703-9438</h3>
                </div>
                <br />
                <div>
                    <h3 className='bottom__right__title'>CONNECT</h3>
                    <h3 className='bottom__right__text'>X</h3>
                    <h3 className='bottom__right__text'>Instagram</h3>
                    <h3 className='bottom__right__text'>Meta</h3>    
                </div>
            </div>
        </section>

        <h4 className='footer__credit'>Design by Matthew Hawkins</h4>
    </footer>
  )
}

export default foot