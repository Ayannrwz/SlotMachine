class SlotMachine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        let result = (s1 == s2) && (s2 == s3) && (s1 == s3);
        return (
             <div className="slot-machine">
            <div className="data">
                {s1}
                {s2}
                {s3}
                {
                result ? <p className="winner">Winner</p> : <p className="loser">Loser</p>
            } </div>
                     </div>
        );
    }
}
