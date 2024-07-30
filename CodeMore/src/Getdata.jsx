import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from 'react-router-dom';

const python = [
    
    {
        "id": 1,
        "title": "Setting Up Python",
        "description": "Instructions for downloading and installing Python from the official website.",
        "snippet": "First, ensure that Python is installed on your computer. You can download it from the \n[official Python website](https://www.python.org/). Follow the installation instructions for your operating system."
      },
      {
        "id": 2,
        "title": "Writing Your First Python Program",
        "description": "A step-by-step guide to writing and running a simple 'Hello, World!' program.",
        "snippet": "Open a text editor or an IDE, type the code \n`print('Hello, World!')`, save the file with a `.py` extension, and run it using `python filename.py`."
      },
      {
        "id": 3,
        "title": "Variables and Data Types",
        "description": "Introduction to variables and different data types in Python.",
        "snippet": "# Integer\nx = 5\n\n# Float\ny = 3.14\n\n# String\nname = 'Alice'\n\n# Boolean\nis_student = True"
      },
      {
        "id": 4,
        "title": "Basic Operations",
        "description": "Performing arithmetic operations using standard operators.",
        "snippet": "a = 10\nb = 3\n\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.333...\nprint(a % b)  # 1"
      },
      {
        "id": 5,
        "title": "Conditional Statements",
        "description": "Using `if`, `elif`, and `else` for conditional logic.",
        "snippet": "age = 18\n\nif age >= 18:\n    print('You are an adult.')\nelif age >= 13:\n    print('You are a teenager.')\nelse:\n    print('You are a child.')"
      },
      {
        "id": 6,
        "title": "Loops",
        "description": "Using `for` and `while` loops to iterate over sequences.",
        "snippet": "# For loop\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)  # 0, 1, 2, 3, 4\n    count += 1"
      },
      {
        "id": 7,
        "title": "Functions",
        "description": "Defining and calling functions in Python.",
        "snippet": "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alice'))  # Hello, Alice!"
      },
      {
        "id": 8,
        "title": "Lists",
        "description": "Creating and manipulating lists in Python.",
        "snippet": "fruits = ['apple', 'banana', 'cherry']\n\nprint(fruits[0])  # apple\nfruits.append('orange')\nprint(fruits)  # ['apple', 'banana', 'cherry', 'orange']"
      },
      {
        "id": 9,
        "title": "Dictionaries",
        "description": "Creating and manipulating dictionaries in Python.",
        "snippet": "person = {\n    'name': 'Alice',\n    'age': 25,\n    'is_student': True\n}\n\nprint(person['name'])  # Alice\nperson['age'] = 26\nprint(person)  # {'name': 'Alice', 'age': 26, 'is_student': True}"
      },
      {
        "id": 10,
        "title": "Modules and Libraries",
        "description": "Importing and using libraries in Python.",
        "snippet": "import math\n\nprint(math.sqrt(16))  # 4.0"
      },
      {
        "id": 11,
        "title": "File Handling",
        "description": "Reading from and writing to files in Python.",
        "snippet": "# Writing to a file\nwith open('example.txt', 'w') as file:\n    file.write('Hello, World!')\n\n# Reading from a file\nwith open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)  # Hello, World!"
      },
      {
        "id": 12,
        "title": "Error Handling",
        "description": "Using try-except blocks to handle exceptions.",
        "snippet": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('You cannot divide by zero!')"
      }
    ];

const cpp = [
    {
      "id" : 1,
      "title": "Setting Up C++",
      "description": "Instructions for downloading and installing a C++ compiler.",
      "snippet": "First, ensure that a C++ compiler is installed on your computer. You can download and install the GCC compiler from the [MinGW website](http://www.mingw.org/). For Windows, you can also use an IDE like [Code::Blocks](http://www.codeblocks.org/)."
    },
    {
      "id" : 2,
      "title": "Writing Your First C++ Program",
      "description": "A step-by-step guide to writing and running a simple 'Hello, World!' program.",
      "snippet": "#include <iostream>\n\nint main() {\n    std::cout << 'Hello, World!' << std::endl;\n    return 0;\n}\n\n// Save the file with a `.cpp` extension and run it using `g++ filename.cpp -o output && ./output`."
    },
    {
      "id" : 3,
      "title": "Variables and Data Types",
      "description": "Introduction to variables and different data types in C++.",
      "snippet": "#include <iostream>\n\nint main() {\n    int x = 5;\n    float y = 3.14;\n    std::string name = 'Alice';\n    bool is_student = true;\n\n    std::cout << x << std::endl;\n    std::cout << y << std::endl;\n    std::cout << name << std::endl;\n    std::cout << is_student << std::endl;\n    return 0;\n}"
    },
    {
      "id" : 4,
      "title": "Basic Operations",
      "description": "Performing arithmetic operations using standard operators.",
      "snippet": "#include <iostream>\n\nint main() {\n    int a = 10;\n    int b = 3;\n\n    std::cout << (a + b) << std::endl;  // 13\n    std::cout << (a - b) << std::endl;  // 7\n    std::cout << (a * b) << std::endl;  // 30\n    std::cout << (a / b) << std::endl;  // 3\n    std::cout << (a % b) << std::endl;  // 1\n    return 0;\n}"
    },
    {
      "id" : 5,
      "title": "Conditional Statements",
      "description": "Using `if`, `else if`, and `else` for conditional logic.",
      "snippet": "#include <iostream>\n\nint main() {\n    int age = 18;\n\n    if (age >= 18) {\n        std::cout << 'You are an adult.' << std::endl;\n    } else if (age >= 13) {\n        std::cout << 'You are a teenager.' << std::endl;\n    } else {\n        std::cout << 'You are a child.' << std::endl;\n    }\n    return 0;\n}"
    },
    {
      "id" : 6,
      "title": "Loops",
      "description": "Using `for` and `while` loops to iterate over sequences.",
      "snippet": "#include <iostream>\n\nint main() {\n    // For loop\n    for (int i = 0; i < 5; ++i) {\n        std::cout << i << std::endl;  // 0, 1, 2, 3, 4\n    }\n\n    // While loop\n    int count = 0;\n    while (count < 5) {\n        std::cout << count << std::endl;  // 0, 1, 2, 3, 4\n        ++count;\n    }\n    return 0;\n}"
    },
    {
      "id" : 7,
      "title": "Functions",
      "description": "Defining and calling functions in C++.",
      "snippet": "#include <iostream>\n\nstd::string greet(std::string name) {\n    return 'Hello, ' + name + '!';\n}\n\nint main() {\n    std::cout << greet('Alice') << std::endl;  // Hello, Alice!\n    return 0;\n}"
    },
    {
      "id" : 8,
      "title": "Arrays",
      "description": "Creating and manipulating arrays in C++.",
      "snippet": "#include <iostream>\n\nint main() {\n    int numbers[3] = {1, 2, 3};\n\n    std::cout << numbers[0] << std::endl;  // 1\n    numbers[1] = 5;\n    std::cout << numbers[1] << std::endl;  // 5\n    return 0;\n}"
    },
    {
      "id" : 9,
      "title": "Vectors",
      "description": "Creating and manipulating vectors in C++.",
      "snippet": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<std::string> fruits = {'apple', 'banana', 'cherry'};\n\n    std::cout << fruits[0] << std::endl;  // apple\n    fruits.push_back('orange');\n    std::cout << fruits.size() << std::endl;  // 4\n    return 0;\n}"
    },
    {
      "id" : 10,
      "title": "Maps",
      "description": "Creating and manipulating maps in C++.",
      "snippet": "#include <iostream>\n#include <map>\n\nint main() {\n    std::map<std::string, int> age;\n    age['Alice'] = 25;\n    age['Bob'] = 30;\n\n    std::cout << age['Alice'] << std::endl;  // 25\n    age['Alice'] = 26;\n    std::cout << age['Alice'] << std::endl;  // 26\n    return 0;\n}"
    },
    {
      "id" : 11,
      "title": "File Handling",
      "description": "Reading from and writing to files in C++.",
      "snippet": "#include <iostream>\n#include <fstream>\n\nint main() {\n    // Writing to a file\n    std::ofstream outfile('example.txt');\n    outfile << 'Hello, World!';\n    outfile.close();\n\n    // Reading from a file\n    std::ifstream infile('example.txt');\n    std::string content;\n    infile >> content;\n    std::cout << content << std::endl;  // Hello, World!\n    infile.close();\n    return 0;\n}"
    },
    {
      "id" : 12,
      "title": "Error Handling",
      "description": "Using try-catch blocks to handle exceptions.",
      "snippet": "#include <iostream>\n\nint main() {\n    try {\n        int result = 10 / 0;\n    } catch (const std::exception &e) {\n        std::cout << 'You cannot divide by zero!' << std::endl;\n    }\n    return 0;\n}"
    }
  ]

const swift = [
      {
          "id": 1,
          "title": "Basic Syntax",
          "description": "A basic example of a Swift script that prints 'Hello, World!' to the console.",
          "snippet": "// This is a simple Swift script\nprint(\"Hello, World!\")"
      },
      {
          "id": 2,
          "title": "Variable Types",
          "description": "Examples of different variable types in Swift, including integers, floats, strings, booleans, arrays, tuples, dictionaries, and sets.",
          "snippet": "// Integers\nvar a = 5\nvar b = -10\nvar c = 0\n\n// Floats\nvar pi: Float = 3.14\nvar gravity: Double = 9.8\nvar temperature = -15.7\n\n// Strings\nvar name = \"Alice\"\nvar greeting = \"Hello, World!\"\nvar multiline = \"\"\"\nThis is a\nmulti-line string.\n\"\"\"\n\n// Booleans\nvar isStudent = true\nvar isTeacher = false\n\n// Arrays\nvar numbers = [1, 2, 3, 4, 5]\nvar fruits = [\"apple\", \"banana\", \"cherry\"]\nvar mixed: [Any] = [1, \"apple\", 3.14, true]\n\n// Tuples\nvar coordinates = (10.0, 20.0)\nvar person = (\"Alice\", 25, \"Engineer\")\n\n// Dictionaries\nvar student = [\n    \"name\": \"Alice\",\n    \"age\": 25,\n    \"isStudent\": true\n] as [String : Any]\n\n// Sets\nvar uniqueNumbers: Set = [1, 2, 3, 4, 5]\nvar fruitsSet: Set = [\"apple\", \"banana\", \"cherry\"]"
      },
      {
          "id": 3,
          "title": "Arithmetic Calculations",
          "description": "Examples of basic arithmetic operations, string concatenation, and type conversion in Swift.",
          "snippet": "// Arithmetic operations\nlet sum = 5 + 3\nlet difference = 10 - 4\nlet product = 7 * 2\nlet quotient = 15 / 3\n\n// String concatenation\nlet fullName = \"John\" + \" \" + \"Doe\"\n\n// Type conversion\nlet age = Int(\"20\")\nlet height = Double(\"5.9\")"
      },
      {
          "id": 4,
          "title": "If-Else Statement",
          "description": "A basic example of an if-else statement in Swift to check if a person is an adult.",
          "snippet": "let age = 18\nif age >= 18 {\n    print(\"You are an adult.\")\n} else {\n    print(\"You are a minor.\")\n}"
      },
      {
          "id": 5,
          "title": "For Loops",
          "description": "A basic example of a for loop in Swift that prints numbers from 0 to 4.",
          "snippet": "for i in 0..<5 {\n    print(i)\n}"
      },
      {
          "id": 6,
          "title": "While Loops",
          "description": "A basic example of a while loop in Swift that prints numbers from 0 to 4.",
          "snippet": "var count = 0\nwhile count < 5 {\n    print(count)\n    count += 1\n}"
      },
      {
          "id": 7,
          "title": "Function Declaration and Call",
          "description": "A basic example of a function declaration and call in Swift that greets a person by name.",
          "snippet": "func greet(name: String) -> String {\n    return \"Hello, \" + name\n}\n\nprint(greet(name: \"Alice\"))"
      },
      {
          "id": 8,
          "title": "Multiple Parameter Function",
          "description": "A basic example of a function with multiple parameters in Swift that adds two integers.",
          "snippet": "func add(a: Int, b: Int) -> Int {\n    return a + b\n}\n\nprint(add(a: 5, b: 3))"
      },
      {
          "id": 9,
          "title": "Creating Modules",
          "description": "An example of how to create and use modules in Swift by importing a custom module and defining a function within it.",
          "snippet": "// In Swift, you can use frameworks or modules by importing them\nimport Foundation\n\n// Example function in a custom module\nfunc sayHello() -> String {\n    return \"Hello from myModule!\"\n}"
      },
      {
          "id": 10,
          "title": "Using Modules",
          "description": "An example of how to use a function from a custom module in Swift.",
          "snippet": "// Using the function from the custom module\nprint(sayHello())"
      },
      {
          "id": 11,
          "title": "Read File",
          "description": "An example of how to read a file in Swift using the Foundation framework.",
          "snippet": "import Foundation\n\nif let filepath = Bundle.main.path(forResource: \"example\", ofType: \"txt\") {\n    do {\n        let contents = try String(contentsOfFile: filepath)\n        print(contents)\n    } catch {\n        print(\"File read error: Error Description\")\n    }\n}"
      },
      {
          "id": 12,
          "title": "Write File",
          "description": "An example of how to write to a file in Swift using the Foundation framework.",
          "snippet": "import Foundation\n\nlet text = \"Hello, World!\"\nlet filename = \"example.txt\"\n\nif let dir = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first {\n    let fileURL = dir.appendingPathComponent(filename)\n    \n    do {\n        try text.write(to: fileURL, atomically: false, encoding: .utf8)\n    } catch {\n        print(\"File write error: Error Description\")\n    }\n}"
      },
      {
          "id": 13,
          "title": "Try-Catch",
          "description": "An example of how to use try-catch for error handling in Swift.",
          "snippet": "do {\n    let result = try someFunctionThatThrows()\n} catch {\n    print(\"Error: \\(error)\")\n}"
      },
      {
          "id": 14,
          "title": "Object-Oriented Programming",
          "description": "An example of basic object-oriented programming in Swift, defining a Dog class with properties and a method.",
          "snippet": "class Dog {\n    var name: String\n    var age: Int\n\n    init(name: String, age: Int) {\n        self.name = name\n        self.age = age\n    }\n\n    func bark() -> String {\n        return \"Woof!\"\n    }\n}\n\nlet dog1 = Dog(name: \"Buddy\", age: 3)\nprint(dog1.bark())"
      },
      {
          "id": 15,
          "name": "Integers",
          "description": "Integers are whole numbers, positive or negative, without a fractional part."
      },
      {
          "id": 16,
          "name": "Floats",
          "description": "Floats are numbers that have a decimal point. They can represent fractional numbers."
      },
      {
          "id": 17,
          "name": "Strings",
          "description": "Strings are sequences of characters enclosed in double or triple quotes."
      },
      {
          "id": 18,
          "name": "Booleans",
          "description": "Booleans represent one of two values: true or false."
      },
      {
          "id": 19,
          "name": "Arrays",
          "description": "Arrays are ordered collections of items that can be of different types. Arrays are mutable, meaning their content can be changed."
      },
      {
          "id": 20,
          "name": "Tuples",
          "description": "Tuples are similar to arrays but are of fixed size and can hold multiple types."
      },
      {
          "id": 21,
          "name": "Dictionaries",
          "description": "Dictionaries are collections of key-value pairs. Keys must be unique and are usually strings or numbers."
      },
      {
          "id": 22,
          "name": "Sets",
          "description": "Sets are unordered collections of unique items."
      }
  ]

  const welcome = [
    {
      "id":1,
      "title": "choose a language to start learning",
      "description" : ""
    }
  ]

  const Getdata = ({prop}) => {
    const [selectedId, setSelectedId] = useState(null);
    const [file, setFile] = useState(welcome);
    const [title, setTitle] = useState('Welcome');
  
    function getFile(prop){
      if(prop === 'Python'){
        setFile(python);
        setTitle('Python');
      }
      else if(prop === 'C++'){
        setFile(cpp);
        setTitle('C++');
      }else if(prop==='Swift'){
        setFile(swift);
        setTitle('Swift');
      }else{
        console.log("invalid extension");
      }
    }
  
    return (
      <>

        <div className='w-full'>
          <div className="w-full">
            {/* <div className="flex flex-wrap justify-center gap-3 border-2 border-solid border-black bg-white px-3 py-2 rounded-xl">
              <button 
                onClick={() => {getFile('Python'); setSelectedId(null); setTitle("Python")}}
                className='outline-none px-4 rounded-xl'
              >
                Python
              </button>
              <button 
                onClick={() => {getFile('C++'); setSelectedId(null); setTitle("C++")}}
                className='outline-none px-4 rounded-xl'
              >
                C++
              </button>
              <button 
                onClick={() => {getFile('Swift'); setSelectedId(null); setTitle("Swift")}}
                className='outline-none px-4 rounded-xl'
              >
                Swift
              </button>
            </div> */}
          </div>
  
          <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
            <div>
              {
              file.map((item) => (
                <motion.div
                  key={item.id}
                  className="mb-8 p-4 bg-white rounded-lg shadow-md"
                  onClick={() => setSelectedId(item.id)}
                >
                  <motion.h2>{item.title}</motion.h2>
                  <motion.h3>{item.description}</motion.h3>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {selectedId && (
                <motion.div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <motion.div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                    {file.map((item) =>
                      item.id === selectedId ? (
                        <div key={item.id}>
                          <motion.h2 className="text-2xl font-bold mb-4">{item.title}</motion.h2>
                          <motion.h3 className="mb-2 text-gray-700">{item.description}</motion.h3>
                          <motion.p className="text-black bg-gray-200 rounded p-10">{item.snippet}</motion.p>
                          <motion.button
                            className="mt-4 p-2 bg-gray-800 text-white rounded"
                            onClick={() => setSelectedId(null)}
                          >
                            Close
                          </motion.button>
                        </div>
                      ) : null
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </>
    );
  };
  
  export default Getdata;
  