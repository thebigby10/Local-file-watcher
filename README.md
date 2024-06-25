# Local-file-watcher
A local file change watcher with node with builtin functions.

## MVP of the project
    1. reading files from the command line argument. 
    2. create a function to check for change in a file. -> use buffer?
    3. create a setInterval for the function to call every n second.
### Added featues
    1. custom command line for different features.
        1. for like an --show-update that will show the update from the previous interval.
    2. only check after the file is saved.
