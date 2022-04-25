import { FacebookOutlined, InstagramOutlined,  TwitterOutlined,  YoutubeOutlined } from '@ant-design/icons'
import './footer.css'

export default function AppFooter() {
  return (
    <div className="footer-container">
      <div className="nav-footer">

        <div className="footer-menu">
          <ul className="footer-items">
            <li className="ftext-item">WEB-UI</li>
            <li className="f-item">
              <a className='footer-link' href="https://facebook.com/salmonhousetv"><FacebookOutlined className='icon-footer'/></a>
            </li>
            <li className="f-item">
              <a className='footer-link' href="https://youtube.com/salmonchannel"><YoutubeOutlined className='icon-footer' /></a>
            </li>
            <li className="f-item">
              <a className='footer-link' href="https://twitter.com/salmonhousetv"><TwitterOutlined className='icon-footer' /></a>
            </li>
            <li className="f-item">
              <a className='footer-link' href="https://instagram.com/salmonhousetv"><InstagramOutlined className='icon-footer' /></a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
