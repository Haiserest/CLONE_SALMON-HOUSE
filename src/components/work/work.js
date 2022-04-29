import './work.css';
import clientServiceList from './clientService_data';
import skitList from './skit_data';
import moreList from './more_data';

export default function AppWork(){

    const clientServiceElement = clientServiceList.map((item) =>{
        return (
            <div className='play-box'>
                <img className='play-image' src={item.thum}/>
                <div className='play-overlay'>
                    <div className='play-icon'></div>
                    <div className='play-arrow'></div>
                </div>
                <h4 className='play-title'>{item.title}</h4>
                <h5 className='play-detail'>{item.descript}</h5>
            </div>
        );
    });

    const skitElement = skitList.map((item) =>{
        return (
            <div className='play-box'>
                <img className='play-image' src={item.thum}/>
                <div className='play-overlay'>
                    <div className='play-icon'></div>
                    <div className='play-arrow'></div>
                </div>
                <h4 className='play-title'>{item.title}</h4>
                <h5 className='play-detail'>{item.descript}</h5>
            </div>
        );
    });

    const moreElement = moreList.map((item) =>{
        return (
            <div className='more-box'>
                <img className='more-image' src={item.thum}/>
                <div className='more-detail'>
                    <h3 className='more-name'>{item.name}</h3>
                </div>
            </div>
        );
    });

    return(

        <div className='work-container'>

            <div className='clientService-container'>
                <div className='clientService-title'>
                    <h3>CLIENTS SERVICE</h3>
                    <a className='view-all' href='/view-ClientService'><b>VIEW ALL &#62;</b></a>
                </div>
                <div className='clientService-item'>
                    {clientServiceElement}
                </div>
            </div>

            <div className='skit-container'>
                <div className='skit-title'>
                    <h3>SKIT</h3>
                    <a className='view-all' href='/view-Skit'><b>VIEW ALL &#62;</b></a>
                </div>
                <div className='skit-item'>
                    {skitElement}
                </div>
            </div>

            <div className='more-container'>
                <h3 className='more-title'>
                    MORE
                </h3>
                <div className='more-item'>
                    {moreElement}
                </div>
            </div>

        </div>

    );
}