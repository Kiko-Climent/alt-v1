import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

import {
  setLoading,
  setRoster,
  setError,
  setItemLoading,
  setArtist,
  setItemError,
} from "./rosterSlice";

export const fetchRoster = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const q = query(collection(db, "roster"));
    const querySnapshot = await getDocs(q);
    const roster = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    });
    dispatch(setRoster(roster));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchArtistById = (id) => async (dispatch) => {
  dispatch(setItemLoading(true));
  try {
    const docRef = doc(db, "roster", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      dispatch(
        setArtist({
          id: docSnap.id,
          ...data,
        })
      );
    } else {
      throw new Error("Artist not found");
    }
  } catch (error) {
    dispatch(setItemError(error.message));
  } finally {
    dispatch(setItemLoading(false));
  }
};