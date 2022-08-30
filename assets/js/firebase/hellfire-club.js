import app from './app.js';
import { addDoc, collection, getFirestore, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export const subscribeToHellfireClub = async (subscription) => {
  const database = getFirestore(app);
  const hellfireClubCollection = collection(database, 'hellfire-club');
  const subscriptionDoc = await addDoc(hellfireClubCollection, subscription);

  return subscriptionDoc.id;
}

export const getHellFireClubSubscriptions = async () => {
  const database = getFirestore(app);
  const hellfireClubCollection = collection(database, 'hellfire-club');
  const subscriptionsDocs = await getDocs(hellfireClubCollection);
  const subscriptions = subscriptionsDocs.docs.map((doc) => doc.data());

  return subscriptions;
}