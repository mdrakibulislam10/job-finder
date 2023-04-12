// set data to local storage
const addToDb = id => {
    let getStoredJobs = getAppliedJobs();
    getStoredJobs[id] = 1;

    localStorage.setItem("applied-jobs", JSON.stringify(getStoredJobs));
}

// get data from local storage
const getAppliedJobs = () => {
    let appliedJobs = {};

    //get applied jobs from local storage
    const storedJobs = localStorage.getItem("applied-jobs");
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

export {
    addToDb,
    getAppliedJobs,
}