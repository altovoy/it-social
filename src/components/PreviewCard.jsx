import {useHistory} from 'react-router-dom'

function  PreviewCard ({user}) {
    const {firstName, lastName} = user
    const history = useHistory()
    const onSeeMoreClick = (e) =>{
        e.preventDefault()
        history.push(`/profile/${user.id}`)
    }
    return(
        <div className='vertDist' style={{padding: 10, width: '200px', height:'100%'}}>
            <h5 className='text-primary'>{`${firstName} ${lastName}`}</h5>
            <button className='button primary' onClick={onSeeMoreClick} >
            See more..
            </button>
        </div>
    )
}

export default PreviewCard