// app/(tabs)/notes.tsx
import NoteForm from "@/components/NoteForm";
import { useAuth } from "@/contexts/AuthContext";
import { database } from "@/firebaseConfig";
import { Link } from "expo-router";
import { onValue, ref, remove, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NoteCard from "../components/NoteCard";

type Note = {
  id: string;
  title: string;
  content: string;
  uid: string;
};

export default function NotesScreen() {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  useEffect(() => {
    if (!user) return;

    const noteRef = ref(database, `notes/${user.uid}`);
    const unsubscribe = onValue(noteRef, (snapshot) => {
      const data = snapshot.val();

      const listNotes = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];

      setNotes(listNotes);
    });

    return () => unsubscribe();
  }, [user]);

  const handleDeleteNote = async (noteId: string) => {
    if (!user) return;

    try {
      await remove(ref(database, `notes/${user.uid}/${noteId}`));
    } catch (error) {
      console.log("error when delete note: ", error);
    }
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
  };

  const handleUpdate = async (data: { title: string; content: string }) => {
    if (!user || !editingNote) return;
    await update(ref(database, `notes/${user.uid}/${editingNote.id}`), data);
    setEditingNote(null);
  };

  if (editingNote) {
    return (
      <NoteForm
        initial={editingNote}
        onSubmit={handleUpdate}
        onCancel={() => setEditingNote(null)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Notes</Text>
        <Link href="/addNote" style={styles.addButton}>
          Add Note
        </Link>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDeleteNote(item.id)}
          />
        )}
      />
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
  addButton: {
    fontSize: 16,
    color: "blue",
  },
});
