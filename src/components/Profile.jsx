import Avatar from 'react-avatar';
import MaterialIcon from 'material-icons-react';


function Profile({ name, lastName, email, phone, city, country }) {
    return (
        <div className='big-container flex-col-center'>
            <div className='profile-container flex-row-center '  >
                <Avatar name="Alejandro Torres" round={true} size="200" />

                <div style={{ margin: 20, }} >
                    <h1 className='text-primary'>{`${name || 'Fisrt Name'} ${lastName || 'Last Name'}`}</h1>

                    <p><span class="material-icons icon">email</span> {email || 'mail@example.com'}</p>
                    <p> <span class="material-icons icon">phone</span> {phone || '+57 3059206592'}</p>
                    <p> <span class="material-icons icon">place</span> {`${city || 'City'}, ${country || 'Country'}`}</p>

                </div>

            </div>


        </div>
    )
}

export default Profile