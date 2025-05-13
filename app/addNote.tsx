// // app/addNote.tsx
// import { useRouter } from "expo-router";
// import { push, ref } from "firebase/database";
// import React from "react";
// import { Button, StyleSheet, View } from "react-native";
// import NoteForm from "../components/NoteForm";
// import { auth, database } from "../firebaseConfig";

// export default function AddNoteScreen() {
//   const router = useRouter();
//   const userId = auth.currentUser?.uid;

//   const handleSaveNote = async (title, content) => {
//     if (!userId) return;
//     const newNoteRef = push(ref(database, `users/${userId}/notes`));
//     await newNoteRef.set({
//       title,
//       content,
//       createdAt: new Date().toISOString(),
//     });
//     router.back();
//   };

//   return (
//     <View style={styles.container}>
//       <NoteForm onSave={handleSaveNote} />
//       <Button title="Cancel" onPress={() => router.back()} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
