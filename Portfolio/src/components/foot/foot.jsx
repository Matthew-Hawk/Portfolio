import './foot.scss'

function foot() {

  return (
    <footer className='footer'>
        <section className='footer__top'>
            <h2 className='footer__top-title'>Selected Projects</h2>
            <h3 className='footer__top-cph'>Feel free to reach out if you want to collaborate with me,or simply have a chat.</h3>
        </section>
        <section className='footer__bottom'>
            <div className='footer__bottom-left'>
                <p className='footer_bottom-left--text'>
                    Lorem ipsum dolor sit amet consectetur. Ipsum etiam est ac hendrerit quis bibendum ornare. Morbi ac massa fames cras.
                </p>
                <button className='footer__bottom-left--button'>Say Hello</button>
                <br />
                <button className='footer__bottom-left--button'>Resume</button>
            </div>
            <div className='footer__bottom-right'>
                <h3 className='footer__bottom-right--title'>START A PROJECT</h3>
                <h3 className='footer__bottom-right--text'>matthawkins44#gmail.com</h3>
                <h3 className='footer__bottom-right--text'>979-703-9438</h3>
                <h3 className='footer__bottom-right--title'>CONNECT</h3>
                <h3 className='footer__bottom-right--text'>X</h3>
                <h3 className='footer__bottom-right--text'>Instagram</h3>
                <h3 className='footer__bottom-right--text'>Meta</h3>
            </div>
        </section>
        <h4 className='footer__credit'>Design by Matthew Hawkins</h4>
    </footer>
  )
}

export default foot