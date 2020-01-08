class sectionOne extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>
                    Hello World!
                </h1>
            </div>
        );
    }
}

ReactDOM.render(
    <sectionOne />,
    document.getElementById('root')
);