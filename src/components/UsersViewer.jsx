import PreviewCard from './PreviewCard.jsx'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'
import Avatar from 'react-avatar'

function UsersViewer({ auth, logoutUser }) {
    const { users, user } = auth
    const handleLogout = e => {
        logoutUser()
    }
    const name = `${user.firstName} ${user.lastName}`
    return (
        <div style={{ margin: 'auto', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', padding: '80px 0 30px 0' }}>
            <div style={{ position: 'fixed', background: 'white', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '60px' }}>
                <h2 className='text-primary'>IT-Social</h2>
                <p>Hello dear <Link to={`/profile/${user.id}`} >{user.firstName}</Link></p>
                
                <Avatar name={name} src={user.img} size={40} />
                
                <button className='button outlined' onClick={handleLogout}>Logout</button>
            </div>

            {
                users && users.map(user =>
                    <PreviewCard user={user} />)
            }
        </div>
    )
}

const mapState = state => ({ auth: state.auth });

export default connect(mapState, { logoutUser })(UsersViewer);