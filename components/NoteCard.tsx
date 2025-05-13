// components/NoteCard.tsx
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type NoteCardProps = {
    note: { id: string; title: string; content: string };
    onEdit: () => void;
    onDelete: () => void;
};

export default function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={onEdit} color={Colors.light.tint} />
                <Button title="Delete" onPress={onDelete} color={Colors.light.danger} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: Colors.light.border,
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: Colors.light.background,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: Colors.light.text,
    },
    content: {
        fontSize: 16,
        marginBottom: 12,
        color: Colors.light.gray,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10, // Use gap for spacing between buttons
    },
});
