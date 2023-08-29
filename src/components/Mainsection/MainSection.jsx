import './MainSection.scss'

const MainSection = () => {
    return (
        <section className="mainSection">
            <div className="mainPicture">
                <img srcSet=".\assets\principalimage.png" alt="principalImage"></img>
            </div>
            <div className="maindescription">
                <h2>Consultores<br />Tecnológicos</h2>
                <br />
                <p className="first">Especialistas en desarrollo web</p>
                <button className="wecallyou">Te llamamos</button>
            </div>
        </section> 
    );
};

export default MainSection;
