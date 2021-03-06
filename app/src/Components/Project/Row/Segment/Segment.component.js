import React, {Component} from 'react';
import {ItemTypes} from '../../../../Constants/Draggable.constants';
import {DragSource, ConnectDragPreview} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';
import PropTypes from "prop-types";
import ProjectActions from "../../../../Actions/Project.actions";

const ItemSource = {
    beginDrag(props) {
        return props;
    },
    canDrag(props, monitor) {
        return props.segment.clean;
    }
};

function collect(connect, monitor) {
    return {
        connectDragPreview: connect.dragPreview(),
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        canDrag: monitor.canDrag()
    }
}

function getStyles(props) {
    const {left, top, isDragging} = props;
    const transform = `translate3d(${left}px, ${top}px, 0)`;

    return {
        position: isDragging ? 'absolute' : 'relative',
        zIndex: 9999,
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        cursor: 'pointer',
        background: '#f5f5f5',
        padding: '20px 10px',
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
        fontSize: 16,
    }
}


class SegmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    createSpaceSegment = () => {
        ProjectActions.createSpaceSegment({
            order: this.props.segment.order,
            type: this.props.type
        });
    };


    render() {
        const {connectDragSource, isDragging, canDrag, segment} = this.props;
        let cursorDrag = 'not-allowed';
        if (isDragging) {
            cursorDrag = 'move';
        } else if (canDrag && !isDragging) {
            cursorDrag = 'move'
        }
        return connectDragSource(
            <div style={getStyles(this.props)} onDoubleClick={this.createSpaceSegment}>
                <p>{segment.clean}</p>
            </div>
        );
    }

    componentDidCatch() {

    }

    componentDidMount() {
        const {connectDragPreview} = this.props
        if (connectDragPreview) {
            // Use empty image as a drag preview so browsers don't draw it
            // and we can draw whatever we want on the custom drag layer instead.
            connectDragPreview(getEmptyImage(), {
                // IE fallback: specify that we'd rather screenshot the node
                // when it already knows it's being dragged so we can hide it with CSS.
                captureDraggingState: true,
            })
        }
    }

    componentWillUnmount() {
    }
}

SegmentComponent.propTypes = {
    type: PropTypes.string.isRequired,
    segment: PropTypes.shape({
        order: PropTypes.number.isRequired,
        clean: PropTypes.oneOfType([() => {
            return null
        }, PropTypes.number]).isDefined,
        next: PropTypes.oneOfType([() => {
            return null
        }, PropTypes.number]).isDefined
    }).isRequired

};

export default DragSource(ItemTypes.ITEM, ItemSource, collect)(SegmentComponent);