import './center.css';

export default function Center({children}){
    return(
        <div className='main'>
            <div className='center'>
            {children}
            </div>
        </div>
    )
}