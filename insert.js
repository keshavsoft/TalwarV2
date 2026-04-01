import ADODB from 'node-adodb';

const connection = ADODB.open(
    "Provider=Microsoft.Jet.OLEDB.4.0;" +
    "Data Source=Database1.mdb;" +
    "Jet OLEDB:Database Password=Keshav;"
);

ADODB.debug = true;

async function run1() {
    const res = await connection.execute(
          "INSERT INTO Table1 (Id, Field1) VALUES (6, 'Test6')"
    );

    console.log(res.recordsAffected);
};
async function run() {
  try {
    const res = await connection.execute(
      "INSERT INTO Table1 (Id, Field1) VALUES (6, 'Test6')"
    );

    console.log("✅ Rows affected:", res.recordsAffected);
  } catch (err) {
    console.error("❌ ERROR:", err);
  } finally {
    console.log("🔥 DONE");
  }
}

run();
