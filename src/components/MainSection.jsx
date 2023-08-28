const MainSection = () => {
    return (
        <section className="mainsection">
            <div className="mainpicture">
                <img srcSet="principalimage.png" alt="principalimage"></img>
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
