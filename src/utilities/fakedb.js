// get data from local storage
const addToDb = id => {
    let getStoredJobs = getAppliedJobs();
    // add quantity
    const quantity = getStoredJobs[id];
    if (!quantity) {
        getStoredJobs[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        getStoredJobs[id] = newQuantity; // key = value;
    }
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
