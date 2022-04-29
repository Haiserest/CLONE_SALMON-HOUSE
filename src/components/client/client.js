import './client.css';
import clientList from './client_data'

export default function AppClient(){

    const clientElements = clientList.map((client) =>{
        return(
            <div className='client-box'>
                <img className='client-image' src={client.thum} title={client.name}/>
            </div>
        );
    });

    return(

        <div className='client-container'>
            <div className='client-mem'>
                {clientElements}
            </div>
        </div>

    );
}