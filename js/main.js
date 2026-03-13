async function loadSnapshotData() {
  try {
    const response = await fetch("data/singapore_snapshot.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("gdp-value").textContent = data.gdp.value;
    document.getElementById("gdp-status").textContent = data.gdp.status;

    document.getElementById("nodx-value").textContent = data.nodx.value;
    document.getElementById("nodx-status").textContent = data.nodx.status;

    document.getElementById("inflation-value").textContent = data.inflation.value;
    document.getElementById("inflation-status").textContent = data.inflation.status;

    document.getElementById("unemployment-value").textContent = data.unemployment.value;
    document.getElementById("unemployment-status").textContent = data.unemployment.status;

    document.getElementById("pmi-value").textContent = data.pmi.value;
    document.getElementById("pmi-status").textContent = data.pmi.status;

    document.getElementById("financial-value").textContent = data.financial.value;
    document.getElementById("financial-status").textContent = data.financial.status;
  } catch (error) {
    console.error("Failed to load snapshot data:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSnapshotData);
