import '../Style/Nav1.css';

const Nav1 = (props)=>{
    return(
        <nav className='nav1'>
            <a href="homepage" className='btnhome'>Simple Task Management System</a>
                <div className='boxbtn'>
                    <p>{props.message}</p>                
                    <a href={props.link} className='btnregister'>{props.btnname}</a>
                </div>
        </nav>
    );
};

export default Nav1;