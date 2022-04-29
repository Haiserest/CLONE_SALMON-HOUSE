import './behind.css';
import behindList from './behind_data';

export default function AppBehind(){

    const behindElements = behindList.map((behind) =>{
        return(
            <div className='behind-box'>
                <img className='behind-image' src={behind.thum}/>
                <div className='behind-title'>BEHIND: {behind.title}</div>
            </div>
        );
    });

    return(

        <div className='behind-container'>
            <div className='behind-list'>
                {behindElements}
            </div>
        </div>

    );
}