        const noteInput = document.getElementById('noteInput')
        const saveButton = document.getElementById('saveButton')
        const lastNote = document.getElementById('lastNote')

        function loadLastNote() {
            const savedNotes = localStorage.getItem('notes')
            if (savedNotes) {
               const notes = JSON.parse(savedNotes)
               lastNote.innerText = notes[notes.length - 1] || 'Нет сохраненных заметок'
            } else {
                lastNote.innerText = 'Нет сохраненных заметок'
            }
        }

            saveButton.addEventListener('click', () => {
            const note = noteInput.value
            if (note) {
                const savedNotes = localStorage.getItem('notes')
                let notes = []
                if (savedNotes) {
                    notes = JSON.parse(savedNotes)
                }
                notes.push(note)
                localStorage.setItem('notes', JSON.stringify(notes))
                lastNote.innerText = note
                noteInput.value = ''
            }
        })
        
        loadLastNote()
  