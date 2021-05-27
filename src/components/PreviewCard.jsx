import { useHistory, Link } from 'react-router-dom'
import Avatar from 'react-avatar'

function PreviewCard({ user }) {
    const { firstName, lastName, img } = user
    const history = useHistory()

    const fullName = `${firstName} ${lastName}`
    return (
        <div className='vertDist preview-card'>
                <Avatar name={fullName} round={true} src={img} />
                <h5 className='text-primary'>{fullName}</h5>
        </div>

    )

}

export default PreviewCard