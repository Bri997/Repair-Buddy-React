const USER_CREATION_SUCESS = "USER_CREATION_SUCESS";
const USER_CREATION_FAILURE = "USER_CREATION_FAILURE";
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

const userCreationSucess = user => ({
  type: USER_CREATION_SUCESS,
  user

  //creating normal actions
});

const userCreationFailure = err => ({
  type: USER_CREATION_FAILURE,
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
})

export {
  userCreationSucess,
  userCreationFailure,
  selectJob,
  createTag,
  USER_CREATION_SUCESS,
  USER_CREATION_FAILURE,
  SELECT_JOB,
  CREATE_TAG
};
