import '../Style/Home.css';
function Homepage(){
    return (
        <div>
            <nav className='big'>
                <a href="homepage" className='btnhome'>Simple Task Management System</a>
                <div className='boxbtn'>
                    <div className='boxlogres'>
                        <a href="homepage" className='btncontact'>Contact Sales</a>
                    </div>
                    <div className='boxlogres'>                    
                        <a href="login" className='btnlogin'>Log In</a>
                        <a href="Register" className='btnregister'>Sign up</a>
                    </div>
                </div>               
            </nav>
            <div className='hero'>
                <div className='head'>
                    <h1>The everything app, for work</h1>
                    <h3>Get everyone working in a single platform designed to manage any type of work.</h3>
                    <a href="Register" className='btnregister'>Get Started. It's FREE</a>
                    <h4>Free Forever. No Credit Card.</h4>
                </div>
            </div>
        </div>
    )
}
export default Homepage;