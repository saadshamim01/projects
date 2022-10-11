### Grep

- **grep -V:** Returns the version

#### Searching in a File

- **grep [search_term] [file]:** Searches in file
- **grep -w [search_term] [file]:** Search exact match
- **grep -i [search_term] [file]:** Search not case sensitive
- **grep -n [search_term] [file]:** Search and returns the line number aswell
- **grep -B [number] [search_term] [file]:** Returns lines before matching terms
- **grep -A [number] [search_term] [file]:** Returns lines after matching terms

#### Searching in a Folder

- **grep -win [search_term] ./*:** Searches in the current directory
- **grep -win [search_term] ./*.txt:** Searching in current directory only in files with .txt extension
- **grep -winr [search_term] ./*:** Seaches recursively in folder and sub folders
- **grep -winr [search_term] . :**  Seaches recursively in folder and sub folders
- **grep -winrl [search_term] .:** Returns the file name that contains search_term
- **grep -winrc [search_term] .:** Returns the file name which contains the search_term and frequency

#### Compound Search

- **history:** Returns all the previously typed commands
- **history | grep "search_term":** Returns only the search
- **history | grep "narrow_field" | grep "search_term":** Returns only the search

awks

- ps | awk '{print $1}'

- **awk -F ":" '{print $column_name}'[file_path]:** Default column seperator is space. Change the default column delimiter to :.