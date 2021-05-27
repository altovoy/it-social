import {useHistory} from 'react-router-dom'

function  PreviewCard ({user}) {
    const {firstName, lastName} = user
    const history = useHistory()
    const onSeeMoreClick = (e) =>{
        e.preventDefault()
        history.push(`/profile/${user.id}`)
    }
    return(
        <div className='vertDist' 
        style={{padding: 10, width: '300px', height:'auto', 
        background: '#F4F8F7', 
        borderRadius: '5px', 
        textAlign: 'center', boxShadow: '0 2.5px 6px 0 rgb(0 0 0 / 30%)'}}>
            <h5 className='text-primary'>{`${firstName} ${lastName}`}</h5>
            <button className='button normal' onClick={onSeeMoreClick} >
            See more..
            </button>
        </div>
    )
}

export default PreviewCard