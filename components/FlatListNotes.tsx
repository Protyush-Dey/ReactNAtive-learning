import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"

interface Note {
  id: string
  title: string
}

const notesData: Note[] = [
  { id: "1", title: "Learn React Native" },
  { id: "2", title: "Build Login Screen" },
  { id: "3", title: "Connect Backend API" },
  { id: "4", title: "Push Project to GitHub" }
]

const FlatListNotes = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default FlatListNotes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  noteItem: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  noteText: {
    fontSize: 16
  }
})