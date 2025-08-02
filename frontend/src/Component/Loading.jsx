import '../Style/Loading.css';

const LoadingScreen = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' , backgroundColor: 'hsl(0 ,0% , 80%)' }}>
            <span className="loader"></span>
        </div>
    );
};

export default LoadingScreen;