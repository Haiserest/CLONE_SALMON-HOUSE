import './contact.css';

export default function AppContact(){
    return(

        <div className='contact-container'>
            <div className='contact-text'>
                <h3 className='head-contact'>SALMON HOUSE CO.,LTD</h3>
                <p className='detail-contact'>955 Soi Suthiporn, Prachasongkroh Rd., Dindaeng BKK. 10400</p>
                <div className='mail-contact'>
                    <b>TEL:</b> +66 2 6419955 ext. 509 / <b>E-MAIL:</b> sh@sal.mn
                    </div>
            </div>
            <div className='contact-image'>
                <img className='map' src='/images/SHmap.jpg'/>
            </div>
        </div>

    );
}