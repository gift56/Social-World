## Social_World

for deployment npm run build

## This is the official codebase for Social_world project

Open [Social_world](https://atcwebsite-omega.vercel.app/) to preview the complete projects.

## Description
This codebase is the frontend part of the website, containing 6 pages of documentation.

## Package Manager

The package manager responsible for the build process is _NPM_.

## Setup

To setup this project First step is to run `"npm i"` to install necessary packages. After package installation `"npm run dev "` to run localhost on port 3000 in your browser.
// build the project
`"npm run build"`


## Usage

The console works much like a Unix shell.
It prints a prompt **(hbnb)** then it awaits the user's input.

---

Interactive mode example

| Command                                       | Example                                                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Run the console                               | `./console.py`                                                                                                                            |
| Quit the console                              | `(hbnb) quit`                                                                                                                             |
| Display the help for a command                | `(hbnb) help <command>`                                                                                                                   |
| Create an object (console prints the ID)      | `(hbnb) create <class>`                                                                                                                   |
| Show an object                                | `(hbnb) show <class> <id>` or `(hbnb) <class>.show(<id>)`                                                                                 |
| Destroy an object                             | `(hbnb) destroy <class> <id>` or `(hbnb) <class>.destroy(<id>)`                                                                           |
| Show all objects, or all instances of a class | `(hbnb) all` or `(hbnb) all <class>`                                                                                                      |
| Update an attribute of an object              | `(hbnb) update <class> <id> <attribute name> "<attribute value>"` or `(hbnb) <class>.update(<id>, <attribute name>, "<attribute value>")` |

---

Non-interactive mode example

```bash
$ echo "help" | ./console.py
(hbnb)

Documented commands (type help <topic>):
========================================
EOF  all  count  create  destroy  help  quit  show  update
```

---

## File storage

---

The file path [engine](./models/engine/) manages the serialization and deserialization of all the data, following a JSON format.

A FileStorage class is defined in [file_storage.py](./models/engine/file_storage.py) with methods to follow this flow:
`<object> -> to_dict() -> <dictionary> -> JSON dump -> <json string> -> FILE -> <json string> -> JSON load -> <dictionary> -> <object>`

The [**init**.py](./models/__init__.py) file contains the instantiation of the FileStorage class called **storage**, followed by a call to the method reload() on that instance.
This allows the storage to be reloaded automatically at initialization, which recovers the serialized data.

---

## Tests

---

All the code is tested with the **unittest** module.
The test for the classes are in the [test_models](./tests/test_models/) folder.

## Issues

> Report issues/bug here: [Issues](https://github.com/gift56)

---

## Built by:
Efe Asieghwu <efeasiughu@gmail.com>

- **Efe G** -[gift56](https://github.com/gift56)
