import './home.css';

export default function AppHome(){
    return(

        <div className='home-container'>
            
            <div className='home-text'>
                <p>Salmon House is a small group of people who produce tasty, nutritious contents.</p>
            </div>

            <div className="home-video">
			    <iframe className="ytplayer" src="https://www.youtube.com/embed/9yKbF0eb-TQ?autoplay=0" frameborder="0"></iframe>
		    </div>
            
        </div>

    );
}