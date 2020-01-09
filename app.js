class SectionOne extends React.Component {
    render() {
        return (
            <div className="shopping-lists">
                <h1>Shopping List for</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
        
ReactDOM.render(
    <SectionOne />,
    document.querySelector("#root")    
);