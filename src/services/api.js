import {get, getDatabase, push, query, ref, remove, set} from "firebase/database";

export const add = async (user, deed) => {
    const oRef = await push(ref(
        getDatabase(),
        `users/${user.uid}/todos`
    ));
    await set(oRef, deed);
    const oSnapshot = await get(query(oRef));
    const oDeed = oSnapshot.val();
    oDeed.key = oRef.key;
    return oDeed;
}
export const getList = async (user) => {
    const oSnapshot = await get(query(ref(getDatabase(), `users/${user.uid}/todos`)));
    const oArr = [];
    let oDeed;
    oSnapshot.forEach((oDoc) => {
        oDeed = oDoc.val();
        oDeed.key = oDoc.key;
        oArr.push(oDeed);
    })
    return oArr;
}

export const setDoneApi = async (user, key) => {
    return set(ref(getDatabase(), `users/${user.uid}/todos/${key}/done`), true);
}

export const del = (user, key) => {
    return remove(ref(getDatabase(), `users/${user.uid}/todos/${key}`));
}