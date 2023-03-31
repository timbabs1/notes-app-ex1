import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

interface Note {
    id: number;
    title: string;
    content: string;
}

const screenWidth = Dimensions.get('window').width;

const Home = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

    const addNote = () => {
        const newNote: Note = { id: notes.length + 1, title, content };
        setNotes([...notes, newNote]);
        setTitle('');
        setContent('');
    };

    const editNote = () => {
        if (editingNoteId) {
            const updatedNotes = notes.map((note) =>
                note.id === editingNoteId ? { ...note, title, content } : note
            );
            setNotes(updatedNotes);
            setTitle('');
            setContent('');
            setEditingNoteId(null);
        }
    };

    const deleteNote = (id: number) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    const handleNotePress = (note: Note) => {
        setTitle(note.title);
        setContent(note.content);
        setEditingNoteId(note.id);
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainerStyle}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>My Notes</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Content"
                        multiline={true}
                        value={content}
                        onChangeText={setContent}
                    />
                    {editingNoteId ? (
                        <TouchableOpacity style={styles.button} onPress={editNote}>
                            <Text style={styles.buttonText}>Save Note</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.button} onPress={addNote}>
                            <Text style={styles.buttonText}>Add Note</Text>
                        </TouchableOpacity>
                    )}
                    {notes.map((note) => (
                        <TouchableOpacity key={note.id} onPress={() => handleNotePress(note)}>
                            <View style={styles.note}>
                                <Text style={styles.noteTitle}>{note.title}</Text>
                                <Text style={styles.noteContent}>{note.content}</Text>
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => deleteNote(note.id)}>
                                    <Text style={styles.deleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        height: '80%',
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContainerStyle: {
        width: screenWidth,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    note: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    noteTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    noteContent: {
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Home;
