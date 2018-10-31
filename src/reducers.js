import * as actions from "./actions";

const initalState = {
  selectedJob: null,
  //
  user: null,
  err: null
};

const repairReducer = (state = initalState, action) => {
  if (action.type === actions.USER_CREATION_SUCCESS) {
    return Object.assign({}, state, { user: action.user });
  }

  //
  else if (action.type === actions.USER_CREATION_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }

  //
  else if (action.type === actions.REMOVE_AUTH_TOKEN) {
    return Object.assign({}, initalState);
  }

  //
  else if (action.type === actions.SELECT_JOB) {
    return Object.assign({}, state, { selectedJob: action.job });
  }

  //
  else if (action.type === actions.NEW_JOB_CREATION_SUCCESS) {
    return Object.assign({}, state, {
      user: { ...state.user, jobs: [...state.user.jobs, action.job] }
    });
  }

  //
  else if (action.type === actions.NEW_JOB_CREATION_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }
  //
  else if (action.type === actions.REMOVE_JOB_SUCCESS) {
    let job = state.user.jobs.findIndex(j => j._id === action.job);

    const jobs = [...state.user.jobs];
    jobs.splice(job, 1);
    return Object.assign({}, state, {
      user: { ...state.user, jobs: jobs },
      selectedJob: null
    });

    //
  } else if (action.type === actions.REMOVE_JOB_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }

  //
  else if (action.type === actions.NEW_IMAGE_UPLOAD_SUCCESS) {
    let job = state.user.jobs.find(i => i._id === action.job);

    job.images.push(action.image);
    const jobs = [...state.user.jobs];

    return Object.assign({}, state, {
      user: { ...state.user, jobs: jobs },

      selectedJob: job
    });
  } else if (action.type === actions.NEW_IMAGE_UPLOAD_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }
  //
  else if (action.type === actions.REMOVE_IMAGE_SUCCESS) {
    let job = state.user.jobs.find(j => j._id === action.job);

    let image = job.images.findIndex(i => i._id === action.image);

    job.images.splice(image, 1);
    return Object.assign({}, state, {
      user: { ...state.user, jobs: [...state.user.jobs] },
      selectedJob: {
        ...state.selectedJob,
        images: [...state.selectedJob.images]
      }
    });
  }
  //
  else if (action.type === actions.CREATE_TAG) {
    let image = state.selectedJob.images.find(i => i._id === action.imageId);
    image.tag.push(action.tag);
    const jobs = [...state.user.jobs];

    return Object.assign({}, state, {
      user: { ...state.user, jobs: jobs },
      selectedJob: {
        ...state.selectedJob
      }
    });
  }
  //
  else if (action.type === actions.REMOVE_TAG) {
    const jobs = [...state.user.jobs];
    let job = jobs.find(j => j._id === action.jobId);
    let image = job.images.find(i => i._id === action.image._id);
    let tag = image.tag.findIndex(t => t._id === action.tagId);

    image.tag.splice(tag, 1);
    return Object.assign({}, state, {
      user: { ...state.user, jobs: jobs },
      selectedJob: job
    });
  } else if (action.type === actions.REMOVE_TAG_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  }
  return state;
};

export default repairReducer;
