import Avatar from 'react-avatar';
import {useParams} from 'react-router-dom'
import {getUserById} from '../actions/userActions'

function Profile() {
    const { id } = useParams();
    const user = getUserById(id)

    if(!user){
        return (<h1>User not founded :(</h1>)
    }

    let { firstName, lastName, email, phone, city, country, img } = user
    const fullName = `${firstName || 'First Name'} ${lastName || 'Last Name'}`
    return (
        <div className='big-container flex-col-center'>
            <div className='profile-container flex-row-center '  >
                <Avatar name={fullName} src={img} round={true} size="200" />

                <div style={{ margin: 20, }} >
                    <h1 className='text-primary'>{fullName}</h1>

                    <p><span class="material-icons icon">email</span> {email || 'mail@example.com' }</p>
                    <p> <span class="material-icons icon">phone</span> {phone || '+57 3059206592'}</p>
                    <p> <span class="material-icons icon">place</span> {`${city || 'City'}, ${country || 'Country'}`}</p>

                </div>

            </div>


        </div>
    )
}

export default Profile