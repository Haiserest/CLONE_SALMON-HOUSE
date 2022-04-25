import { useEffect, useState } from 'react';
import './about.css';

export default function AppAbout(){

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://www.mecallapi.com/api/users')
        .then(res => res.json())
        .then((data) =>{
            setUser(data);
        })
    },[]);

    const crewElements = user.map((item) =>{
        return (
            <div className='crew-box'>
                <img className='crew-avatar' src={item.avatar}/>
                <div className='crew-overlay'>
                    <div className='crew-detail'>
                        <h4>{item.fname} {item.lname}</h4>
                        <h5>{item.username}</h5>
                    </div>
                </div>
                
            </div>
        );
    });

    return(

        <div className='about-container'>

            <div className='about-text'>
                <b>‘Salmon House’</b> เป็น ‘Production House’ ที่เกิดจากการรวมตัวของคนสร้าง content บนหน้าหนังสือ
                
                <p>โดยหันมาผลิตงาน Motion Content อย่างเต็มตัว ภายใต้คอนเซ็ปต์ ‘Intellectual Badass’
                ซึ่งมีเอกลักษณ์ตรงที่เนื้อหาสนุก กวนตีน และ Relate กับผู้ชม
                จนทำให้ผลงานหลายชิ้นของ Salmon House ได้รับการพูดถึงในวงกว้าง</p>
                
                <p>เราหวังเป็นอย่างยิ่งว่า งานของเรานอกจากจะขายของ สร้างภาพลักษณ์ที่ดีให้สินค้า และสร้างความบันเทิงให้กับผู้ชมแล้ว
                งานของเรายังสามารถเปิดพื้นที่ใหม่ๆ ทางไอเดียให้กับผู้ชมได้อีกด้วย</p>
                
            </div>

            <div className='about-crew'>
                <h3> OUR CREWS</h3>
                <div className='crew-mem'>
                    {crewElements}
                </div>
            </div>
            <div className='about-partner'>
                <h3> OUR PARTNERS</h3>

            </div>

        </div>

    );
}