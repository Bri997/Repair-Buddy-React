const USER_CREATION_SUCESS = "USER_CREATION_SUCESS";
const USER_CREATION_FAILURE = "USER_CREATION_FAILURE";
const NEW_JOB_CREATION_SUCESS = "NEW_JOB_CREATION_SUCESS";
const NEW_JOB_CREATION_FAILURE = "NEW_JOB_CREATION_FAILURE";

const SELECT_JOB = "SELECT_JOB";
const CREATE_TAG = "CREATE_TAG";

export const signUpActions = user => dispatch => {
  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json().then(user => {
        user.token = res.headers.get("x-auth-token");
        console.log(user);
        return user;
      });
    })
    .then(user => {
      dispatch(userCreationSucess(user));
    })
    .catch(err => {
      dispatch(userCreationFailure(err));
    });
};

export const addNewJobAction = job => dispatch => {
  fetch("http://localhost:3000/job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(job)
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res
      .json()
      .then(job => {
        dispatch(newJobCreationSucess(job));
      })
      .catch(err => {
        dispatch(newJobCreationFailure(err));
      });
  });
};

const userCreationSucess = user => ({
  type: USER_CREATION_SUCESS,
  user

  //creating normal actions
});

const userCreationFailure = err => ({
  type: USER_CREATION_FAILURE,
  err
});

const newJobCreationSucess = job => ({
  type: NEW_JOB_CREATION_SUCESS,
  job
});

const newJobCreationFailure = err => ({
  type: NEW_JOB_CREATION_FAILURE,
  err
});

const selectJob = job => ({
  type: SELECT_JOB,
  job
});

const createTag = (tag, imageId) => ({
  type: CREATE_TAG,
  tag,
  imageId
});

export {
  USER_CREATION_SUCESS,
  USER_CREATION_FAILURE,
  userCreationSucess,
  userCreationFailure,
  NEW_JOB_CREATION_SUCESS,
  NEW_JOB_CREATION_FAILURE,
  newJobCreationSucess,
  newJobCreationFailure,
  SELECT_JOB,
  selectJob,
  CREATE_TAG,
  createTag
};

//do the fetch like the user sing up option to the tag endpoint
