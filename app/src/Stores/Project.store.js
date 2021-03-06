/*
 * Analyze Store
 */
import AppDispatcher from './AppDispatcher';
import EventEmitter from 'events';
import ProjectConstants from '../Constants/Project.constants';
import assign from 'object-assign';
import {List, Set, fromJS} from 'immutable';


EventEmitter.prototype.setMaxListeners(0);

let ProjectStore = assign({}, EventEmitter.prototype, {
    jobID: null,
    job: {
        source: List(),
        target: List()
    },

    updateAll: function (volumeAnalysis, project) {

    },
    emitChange: function (event, args) {
        this.emit.apply(this, arguments);
    },

    /**
     *
     * @param {Object} segments An object with source and target list
     * @param {Array} segments.source A list of source segments
     * @param {Array} segments.target A list of target segments
     */
    storeSegments: function (segments) {
        const source = fromJS(segments.source);
        const target = fromJS(segments.target);
        /*TODO: remove this when we remove select algorithm*/
        this.job.source = List();
        this.job.target = List();
        this.job.source = this.job.source.push(...source);
        this.job.target = this.job.target.push(...target);
    },
    /**
     *
     * @param {Object[]} changes A List of rows to apply actions
     * @param {String} changes[].action The action to application on local row
     * @param {String} changes[].rif_order Depending on the received action takes different meanings.
     * if changes[].action = 'create' we refer to next order row.
     * if changes[].action = 'delete' we refer to row to delete.
     * if changes[].action = 'update' we refer to row to update.
     * @param {String} changes[].data The new row
     * @param {String} changes[].type The type of segments (target or source)
     */
    storeMovements: function (changes) {
        changes.map(change => {
            let index;
            if(change.rif_order){
                index = this.job[change.type].findIndex(i => i.get('order') === change.rif_order);
            }
            switch (change.action) {
                case 'delete':
                    this.job[change.type] = this.job[change.type].delete(index);
                    break;
                case 'create':
                    this.job[change.type] = this.job[change.type].insert(index, fromJS(change.data));
                    break;
                case 'push':
                    this.job[change.type] = this.job[change.type].push(fromJS(change.data));
                    break;
                case 'update':
                    this.job[change.type] = this.job[change.type].set(index, fromJS(change.data));
                    break;
            }
        });

        //Todo: remove this test
        const arrayS = this.job.source.toJS();
        console.log('#### SOURCE #####');
        for(let x= arrayS.length -5; x<= arrayS.length; x++){
            console.log(arrayS[x].order+'       '+arrayS[x].next);
        }
        const arrayt = this.job.target.toJS();
        console.log('#### TARGET #####');
        for(let x= arrayT.length -5; x<= arrayT.length; x++){
            console.log(arrayt[x].order+'       '+arrayt[x].next);
        }
    },

});


// Register callback to handle all updates
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case ProjectConstants.SET_JOB_ID:
            ProjectStore.jobID = action.jobID;
            break;
        case ProjectConstants.STORE_SEGMENTS:
            ProjectStore.storeSegments(action.segments);
            ProjectStore.emitChange(ProjectConstants.RENDER_ROWS, {
                source: ProjectStore.job.source.toJS(),
                target: ProjectStore.job.target.toJS()
            });
            break;
        case ProjectConstants.CHANGE_SEGMENT_POSITION:
            ProjectStore.storeMovements(action.changes,action.type);
            ProjectStore.emitChange(ProjectConstants.RENDER_ROWS, {
                source: ProjectStore.job.source.toJS(),
                target: ProjectStore.job.target.toJS()
            });
            break;
    }
});


export default ProjectStore;


