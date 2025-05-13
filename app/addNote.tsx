// app/addNote.tsx
import { useAuth } from "@/contexts/AuthContext";
import { database } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { push, ref } from "firebase/database";
import { StyleSheet, View } from "react-native";
import NoteForm from "../components/NoteForm";

export default function AddNoteScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const handleSaveNote = async (data: { title: string; content: string }) => {
    if (!user) return;

    push(ref(database, `notes/${user.uid}`), data);
    router.back();
  };

  return (
    <View style={styles.container}>
      <NoteForm onSubmit={handleSaveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
