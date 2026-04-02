import fs from "fs";
import MDBReader from "mdb-reader";

const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const pullTableData = () => {
    const buffer = fs.readFileSync(dataPath);
    const reader = new MDBReader(buffer);

    const tableNames = reader.getTableNames();

    const result = {};

    tableNames.forEach((tableName) => {
        try {
            const table = reader.getTable(tableName);
            const count = table.getData().length;

            result[tableName] = count;
        } catch {
            result[tableName] = -1;
        };
    });

    return result;
};

const pullTableData1 = () => {
    const buffer = fs.readFileSync(dataPath);
    const reader = new MDBReader(buffer);

    const tableNames = reader.getTableNames();

    const result = [];

    tableNames.forEach((tableName) => {
        try {
            const table = reader.getTable(tableName);
            const count = table.getData().length;

            result.push({ table: tableName, rows: count });
        } catch {
            result.push({ table: tableName, rows: -1 });
        }
    });

    // 🔽 sort DESC
    result.sort((a, b) => b.rows - a.rows);

    return result;
};

async function addToJsonArray(filePath, newItem) {
    try {
        // 1. Read the file
        const data = await fs.readFileSync(filePath, 'utf8');

        // 2. Parse JSON string into a JavaScript array
        const jsonArray = JSON.parse(data);

        // 3. Add new item to the array
        jsonArray.push(newItem);

        // 4. Stringify and write back to the file
        // null, 2 adds indentation for readability
        await fs.writeFileSync(filePath, JSON.stringify(jsonArray, null, 2));

        console.log('Successfully updated JSON file');
    } catch (err) {
        console.error('Error updating file:', err);
    }
};

const toFile = () => {
    const tableData = pullTableData();

    addToJsonArray('Data/tables.json', tableData);
};

toFile();