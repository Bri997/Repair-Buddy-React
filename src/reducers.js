import * as actions from "./actions";

const initalState = {
  jobs: [
    {
      id: 1,
      jobName: "Jetta GLI",
      jobInfo: "Need to change door locks",
      //this is the images within the job
      images: [
        {
          url: "https://picsum.photos/200/300/?random",
          imageDescription: "Starting Tear Down",
          Date: "",
          tags: ["lock", "door", "trim removal"]
        },
        {
          url: "https://picsum.photos/200/300/?random",
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
          url: "https://picsum.photos/300/200/?random",
          imageDescription: "Engine Cover",
          Date: "",
          tags: ["React", "is crazy"]
        },
        {
          url: "https://picsum.photos/200/300/?random",
          imageDescription: "Engine 2nd picture",
          Date: "",
          tags: ["Engine", "oil pan"]
        }
      ]
    }
  ],

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
  }
  return state;
};

export default repairReducer;
