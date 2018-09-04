import * as actions from "./actions";

const initalState = {
  jobs: [
    {
      id: 1,
      jobName: "Jetta GLI",
      jobInfo: "Need to change door locks",
      images: [
        {
          id: 1,
          url: "https://picsum.photos/1080/1920/?random",
          imageDescription: "Starting Tear Down",
          Date: "",
          tags: ["lock", "door", "trim removal"]
        },
        {
          id: 2,
          url: "https://picsum.photos/1080/1920/?random",
          imageDescription: "Tear Down Part 2 of Job",
          Date: "",
          tags: ["door", "speaker", "trim removal", "door lock"]
        }
      ]
    },
    {
      id: 2,
      jobName: "Nissan Rogue",
      jobInfo: "Oil Change ",
      images: [
        {
          id: 3,
          url: "https://picsum.photos/1080/1920/?random",
          imageDescription: "Engine Cover",
          Date: "",
          tags: ["React", "is crazy"]
        },
        {
          id: 4,
          url: "https://picsum.photos/1080/1920/?random",
          imageDescription: "Engine 2nd picture",
          Date: "",
          tags: ["Engine", "oil pan"]
        }
      ]
    }
  ],
  selectedJob: null,
  selectedImage: null,
  user: [
    {
      name: "Brian"
    }
  ],
  err: null
};

const repairReducer = (state = initalState, action) => {
  if (action.type === actions.USER_CREATION_SUCESS) {
    return Object.assign({}, state, { user: action.user });
  } else if (action.type === actions.USER_CREATION_FAILURE) {
    return Object.assign({}, state, { err: action.err });
  } else if (action.type === actions.SELECT_JOB) {
    return Object.assign({}, state, { selectedJob: action.job });
  }
  return state;
};

export default repairReducer;
