import './css/index.less'
// component
import { UserOutlined, ExportOutlined } from '@ant-design/icons';
import HeaderNav from './HeaderNav'

// others
import logo from '../../common/img/logo.png'
const Header = props => {


    return <div className='header'>
        <div className='header-left'>
            <img src={logo} />
            <HeaderNav />
        </div>
        <div className='header-right'>
            <UserOutlined />
            <ExportOutlined />
        </div>

    </div>

}

export default Header