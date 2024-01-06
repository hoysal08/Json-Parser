const fs = require("fs")
const { JSONParser } = require("./index")

if (process.argv.length !== 3) {
    console.error('Usage: node json_parser.ts <input_file>');
    process.exit(1);
}

const inputFileName = process.argv[2];

try {
    const inputData = fs.readFileSync(inputFileName, 'utf-8');
    const customParser = new JSONParser(inputData);
    const result = customParser.parse();
    console.log(result);
} catch (error) {
    console.error(`Error reading file '${inputFileName}': ${error.message}`);
    process.exit(1);
}