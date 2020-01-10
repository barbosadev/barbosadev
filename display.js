class SectionOne extends React.Component{
    render() {
        return (
        <div id="preloader">
            <div className="flex-align" style={{backgroundColor: "fff"}}>
                <div className="container">
                    <div className="spinner-border text-success" style={{width: 15+"rem", height: 15+"rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>,
        <div className="flex-align bg_one" id="1">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="imgs/perfil.png" className="rounded-circle mx-auto d-block img-perfil"/>    
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="display-4 efeito">Oi, meu nome é Victor</h1>
                        <h2>Sou um desenvolvedor</h2>
                        <div>
                            <a href="https://github.com/vldbarbosa" className="text-decoration-none sociais" target="_blank">
                                <i className="fab fa-github-square fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/_victorldb" className="text-decoration-none sociais" target="_blank">
                                <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/victorldb/" className="text-decoration-none sociais" target="_blank">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511930274837" className="text-decoration-none sociais" target="_blank">
                                <i className="fab fa-whatsapp-square fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        );
    }
}

export default SectionOne;