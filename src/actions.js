const USER_CREATION_SUCCESS = "USER_CREATION_SUCCESS";
const USER_CREATION_FAILURE = "USER_CREATION_FAILURE";

const NEW_JOB_CREATION_SUCCESS = "NEW_JOB_CREATION_SUCCESS";
const NEW_JOB_CREATION_FAILURE = "NEW_JOB_CREATION_FAILURE";

const NEW_IMAGE_UPLOAD_SUCCESS = "NEW_IMAGE_UPLOAD_SUCCESS";
const NEW_IMAGE_UPLOAD_FAILURE = "NEW_IMAGE_UPLOAD_FAILURE";

const REMOVE_IMAGE_SUCCESS = "REMOVE_IMAGE_SUCCESS";
const REMOVE_IMAGE_FAILURE = "REMOVE_IMAGE_FAILURE";

const SELECT_JOB = "SELECT_JOB";

const CREATE_TAG = "CREATE_TAG";
const Create_Tag_FAILURE = "Create_Tag_FAILURE";

const REMOVE_TAG = "REMOVE_TAG";
const REMOVE_TAG_FAILURE = "REMOVE_TAG_FAILURE";

const REMOVE_JOB_SUCCESS = "REMOVE_JOB_SUCCESS";
const REMOVE_JOB_FAILURE = "REMOVE_JOB_FAILURE";

const removeJobSuccess = job => {
  return {
    type: REMOVE_JOB_SUCCESS,
    job
  };
};

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

export const logInActions = userInfo => dispatch => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(userCreationSucess(user));
      let authToken = user.token;
      saveAuthToken(authToken);

      return Promise.resolve();
    })

    // .then(url => {
    //   this.props.history.push("/jobs/");
    // })
    //
    .catch(err => {
      console.log(err);
      dispatch(userCreationFailure(err));
    });
};
export const saveAuthToken = authToken => {
  try {
    localStorage.setItem("x-auth-token", authToken);
  } catch (e) {
    console.log(e);
  }
};
export const addNewJobAction = (job, token) => dispatch => {
  fetch("http://localhost:3000/job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-auth-token": token
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

export const removeJobAction = (jobId, token) => dispatch => {
  fetch(`http://localhost:3000/job/${jobId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-auth-token": token
    }
  })
    .then(job => {
      dispatch(removeJobSuccess(jobId));
    })
    .catch(err => {
      console.log("There was an error");
      dispatch(removeJobFailure(err));
    });
};

export const addNewImageAction = (
  image,
  job,
  token,
  description
) => dispatch => {
  let formData = new FormData();

  formData.append("userImage", image);
  formData.append("description", description);

  fetch(`http://localhost:3000/image/${job}`, {
    method: "POST",
    headers: { "x-auth-token": token },
    body: formData
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res
      .json()
      .then(image => {
        dispatch(newImageUploadSucess(image, job));
      })

      .catch(err => {
        dispatch(newImageUploadFailure(err));
      });
  });
};

export const removeImageAction = (imageId, jobId, token) => dispatch => {
  fetch(`http://localhost:3000/image/${imageId}/${jobId}`, {
    method: "DELETE",
    headers: { "x-auth-token": token }
  })
    .then(image => {
      dispatch(removeImageSuccess(imageId, jobId));
    })
    .catch(err => {
      console.log(err);
      dispatch(removeImageFailure(err));
    });
};

export const addNewTagAction = (tag, imageId, token) => dispatch => {
  fetch(`http://localhost:3000/image/${imageId}/tag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-auth-token": token
    },

    body: JSON.stringify({ tag })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json().then(tag => {
        dispatch(createTag(tag, imageId));
      });
    })
    .catch(err => {
      dispatch(createTagfailure(err));
    });
};

export const removeTagAction = (imageId, tagId, jobId, token) => dispatch => {
  fetch(`http://localhost:3000/image/${imageId}/tag/${tagId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-auth-token": token
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json().then(image => {
        dispatch(removeTag(image, jobId));
      });
    })
    .catch(err => {
      dispatch(removeTagFailure(err));
    });
};

const userCreationSucess = user => ({
  type: USER_CREATION_SUCCESS,
  user

  //creating normal actions
});

const userCreationFailure = err => ({
  type: USER_CREATION_FAILURE,
  err
});

const newJobCreationSucess = job => ({
  type: NEW_JOB_CREATION_SUCCESS,
  job
});
const newImageUploadSucess = (image, job) => ({
  type: NEW_IMAGE_UPLOAD_SUCCESS,
  image,
  job
});
const newImageUploadFailure = err => ({
  type: NEW_IMAGE_UPLOAD_FAILURE,
  err
});

const removeImageSuccess = (image, job) => ({
  type: REMOVE_IMAGE_SUCCESS,
  image,
  job
});

const removeImageFailure = err => ({
  type: REMOVE_IMAGE_FAILURE,
  err
});
const newJobCreationFailure = err => ({
  type: NEW_JOB_CREATION_FAILURE,
  err
});

const selectJob = job => ({
  type: SELECT_JOB,
  job
});

const removeJobFailure = err => ({
  type: REMOVE_JOB_FAILURE,
  err
});
const createTag = (tag, imageId) => ({
  type: CREATE_TAG,
  tag,
  imageId
});
const createTagfailure = err => ({
  type: Create_Tag_FAILURE,
  err
});

const removeTag = (image, jobId) => ({
  type: REMOVE_TAG,
  image,
  jobId
});

const removeTagFailure = err => ({
  type: REMOVE_TAG_FAILURE,
  err
});

export {
  USER_CREATION_SUCCESS,
  USER_CREATION_FAILURE,
  userCreationSucess,
  userCreationFailure,
  NEW_JOB_CREATION_SUCCESS,
  NEW_JOB_CREATION_FAILURE,
  newJobCreationSucess,
  newJobCreationFailure,
  SELECT_JOB,
  selectJob,
  newImageUploadSucess,
  NEW_IMAGE_UPLOAD_SUCCESS,
  NEW_IMAGE_UPLOAD_FAILURE,
  newImageUploadFailure,
  CREATE_TAG,
  createTag,
  removeTag,
  REMOVE_TAG,
  REMOVE_TAG_FAILURE,
  removeJobSuccess,
  REMOVE_JOB_SUCCESS,
  REMOVE_JOB_FAILURE,
  removeImageSuccess,
  REMOVE_IMAGE_SUCCESS,
  REMOVE_IMAGE_FAILURE,
  removeImageFailure
};

//do the fetch like the user sing up option to the tag endpoint
