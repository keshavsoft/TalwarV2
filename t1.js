import ADODB from 'node-adodb';
const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";
const tableName = "SzMast";

const connection = ADODB.open(
    "Provider=Microsoft.Jet.OLEDB.4.0;" +
    `Data Source=IAM.mdb;` +
    "Jet OLEDB:Database Password=sekhar;"
);

async function run() {
    const res = await connection.execute(
        `INSERT INTO ${tableName} (SzCode, SzName) VALUES (8902,'yyyyyyyy')`
    );

    console.log(res);
};

run();
