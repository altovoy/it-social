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
        <div className='cards-grid'>
            <div className='app-bar'>
                <h2 className='text-primary'>IT-Social</h2>
                <p className="appbar-text" >Hello dear <Link to={`/profile/${user.id}`} >{user.firstName}</Link></p>
                <Link to={`/profile/${user.id}`} >
                <Avatar name={name} src={user.img} round={true} size={50} />
                </Link>

                <button id="appbar-button" className='button outlined' onClick={handleLogout}>Logout</button>
            </div>

            {
                users && users.map(user =>
                    <div className='flex-items-center'>
                        <PreviewCard user={user} />
                    </div>
                )
            }
        </div>
    )
}

const mapState = state => ({ auth: state.auth });

export default connect(mapState, { logoutUser })(UsersViewer);