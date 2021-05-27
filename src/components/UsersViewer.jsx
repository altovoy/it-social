import PreviewCard from './PreviewCard.jsx'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/authActions'

function UsersViewer({ auth, logoutUser}) {
    const { users, user } = auth
    const handleLogout = e =>{
        logoutUser()
    }
    return (
        <div style={{ margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', paddingTop: '60px' }}>
            <div style={{position: 'fixed', background:'white', top:0, left:0, right: 0, display:'flex', alignItems:'center', justifyContent:'space-around', width: '100%', height:'60px'}}>
            <h2 className='text-primary'>IT-Social</h2>
            <button className='button outlined'  onClick={handleLogout}>Logout</button>
            </div>
            
            {
                users && users.map(user =>
                    <PreviewCard user={user} />)
            }
        </div>
    )
}

const mapState = state => ({ auth: state.auth });

export default connect(mapState, {logoutUser})(UsersViewer);