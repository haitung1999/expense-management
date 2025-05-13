// components/NoteForm.tsx
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

type NoteFormProps = {
  initial?: { title: string; content: string };
  onSubmit: (data: { title: string; content: string }) => void;
  onCancel?: () => void;
};

export default function NoteForm({
  initial,
  onSubmit,
  onCancel,
}: NoteFormProps) {
  const [title, setTitle] = useState(initial?.title || "");
  const [content, setContent] = useState(initial?.content || "");

  const handleSave = () => {
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        multiline
        value={content}
        onChangeText={setContent}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Save Note"
            onPress={handleSave}
            color={Colors.light.tint}
          />
        </View>

        {onCancel && (
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onCancel}
              color={Colors.light.secondary}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: Colors.light.background,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    borderColor: Colors.light.border,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: Colors.light.text,
  },
  contentInput: {
    height: 120,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    flex: 1,
  },
});
