// app/(tabs)/notes.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import NoteCard from '../../components/NoteCard';
// import { auth } from '../../firebaseConfig';

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  //   const userId = auth.currentUser?.uid;

  //   useEffect(() => {
  //     if (!userId) return;

  //     const notesRef = ref(database, `users/${userId}/notes`);
  //     const unsubscribe = onValue(notesRef, (snapshot) => {
  //       const data = snapshot.val();
  //       const notesList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
  //       setNotes(notesList);
  //     });

  //     return () => unsubscribe();
  //   }, [userId]);

  //   const handleDeleteNote = async (id) => {
  //     if (!userId) return;
  //     const noteRef = ref(database, `users/${userId}/notes/${id}`);
  //     await remove(noteRef);
  //   };

  //   const handleLogout = async () => {
  //     await signOut(auth);
  //     router.replace('/login');
  //   };

  return (
    <View style={styles.container}>
      <View>
        <Text>abc</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
  },
});
