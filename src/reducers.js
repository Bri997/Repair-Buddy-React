import * as actions from "./actions";

const initalState = {
  selectedJob: null,
  //
  user: null,
  err: null
};
// create an action for the err. have a comp to check for the err
const repairReducer = (state = initalState, action) => {

  console.log('The reducer was called', action);

  if (action.type === actions.USER_CREATION_SUCESS) {
    return Object.assign({}, state, { user: action.user });
  }

  //
  else if (action.type === actions.USER_CREATION_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }

  //
  else if (action.type === actions.SELECT_JOB) {
    return Object.assign({}, state, { selectedJob: action.job });
  }

  //
  else if (action.type === actions.NEW_JOB_CREATION_SUCESS) {
    return Object.assign({}, state, {
      user: {...state.user, jobs: [...state.user.jobs, action.job] }
    });
  }

  //
  else if (action.type === actions.NEW_JOB_CREATION_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }
  //
  else if (action.type === actions.REMOVE_JOB_SUCCESS) {
    let job = state.user.jobs.findIndex(j => j._id === action.job);
    console.log("Reducer job", job);
    const jobs = [...state.user.jobs]
    jobs.splice(job, 1)
    return Object.assign({}, state, {
      user: {...state.user, jobs: jobs }
    });

    //
  } else if (action.type === actions.REMOVE_JOB_FAILURE) {
    console.log(action.err + "hello");
    return state;
  }

  //
  else if (action.type === actions.NEW_IMAGE_UPLOAD_SUCESS) {
    let job = state.jobs.find(i => i.id === action.job);
    job.images.push(action.image);
    console.log(job);
    return Object.assign({}, state, { jobs: [...state.jobs] });
  }

  //
  else if (action.type === actions.CREATE_TAG) {
    let image = state.selectedJob.images.find(i => i._id === action.imageId);
    image.tag.push(action.tag);

    return Object.assign({}, state, {
      selectedJob: { images: [...state.selectedJob.images] }
    });
  }
  //
  else if (action.type === action.REMOVE_TAG) {
    let image = state.selectedJob.images.find(i => i._id === action.imageId);
    image.tag;
  }
  return state;
};

export default repairReducer;
