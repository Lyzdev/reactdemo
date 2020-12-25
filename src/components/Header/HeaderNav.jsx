import './css/header_nav.less'

import { Link, NavLink } from 'react-router-dom'
import { HeaderMenu } from '../../utils/conf'
import routes from '../../router/route'
function HeaderNav() {
    // return <ul className='header-nav'>
    //     {
    //         Array.isArray(HeaderMenu) ? HeaderMenu.map(item => <li className='nav-item' key={item.key}><Link  to={item.to}>{item.label}</Link></li>) : ''
    //     }
    // </ul>
     return <ul className='header-nav'>
     {
         Array.isArray(routes) ? routes.map(item =>item.show? <li className='nav-item' key={item.path}><Link  to={item.path}>{item.title}</Link></li>:'') : ''
     }
 </ul>

}
export default HeaderNav