import * as React from 'react'
import SegmentComponent from '../Row/Segment/Segment.component'

const styles = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
};

export default class SegmentDragLayer extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const {type,segment} = this.props.item;

        return (
            <div style={styles}>
                <SegmentComponent type={type}
                                  segment={segment}/>
            </div>
        )
    }
}
