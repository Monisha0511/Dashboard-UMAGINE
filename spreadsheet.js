const sheetId = '1UU6r25tKgOWeOLl4Dto402z3L4xj5-VQHuNf5xwwMPI';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;

const sheetName = 'Sheet1'; 
const itPavilion = 'A pavilion';
const tnPavilion = 'B pavilion';
const startupPavilion = 'E pavilion';
const industryPavilion = 'F pavilion';
const podPavilion = 'G pavilion';

const gid0 = '0'; // Update this with the correct gid of your sheet
const gidA = '1533805534';
const gidB = '1949496624';
const gidE = '183914268';
const gidF = '1403632118';
const gidG = '883052713';

const query = encodeURIComponent(`SELECT * WHERE A IS NOT NULL`); // Assuming your data starts from column A

const url1 = `${base}gid=${gid0}&sheet=${sheetName}&tq=${query}`;
const urlA = `${base}gid=${gidA}&sheet=${itPavilion}&tq=${query}`;
const urlB = `${base}gid=${gidB}&sheet=${tnPavilion}&tq=${query}`;
const urlE = `${base}gid=${gidE}&sheet=${startupPavilion}&tq=${query}`;
const urlF = `${base}gid=${gidF}&sheet=${industryPavilion}&tq=${query}`;
const urlG = `${base}gid=${gidG}&sheet=${podPavilion}&tq=${query}`;


document.addEventListener('DOMContentLoaded', () => {
    fetchData(url1)
        .then(jsonData1 => {
            processData(jsonData1); // Process data from url1
            generatePieCharts(jsonData1);
        })
        .catch(error => {
            console.error('Error fetching data from url1:', error);
        });

    fetchData(urlA)
        .then(jsonDataA => {
            processDataA(jsonDataA); // Process data from urlA
        })
        .catch(error => {
            console.error('Error fetching data from urlA:', error);
        });

    fetchData(urlB)
        .then(jsonDataB => {
            processDataB(jsonDataB); // Process data from urlB
        })
        .catch(error => {
            console.error('Error fetching data from urlB:', error);
        });

    fetchData(urlE)
        .then(jsonDataE => {
            processDataE(jsonDataE); // Process data from urlE
        })
        .catch(error => {
            console.error('Error fetching data from urlE:', error);
        });

    fetchData(urlF)
        .then(jsonDataF => {
            processDataF(jsonDataF); // Process data from urlF
        })
        .catch(error => {
            console.error('Error fetching data from urlF:', error);
        });

    fetchData(urlG)
        .then(jsonDataG => {
            processDataG(jsonDataG); // Process data from urlG
        })
        .catch(error => {
            console.error('Error fetching data from urlG:', error);
        });
});

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.text();
            })
            .then(data => {
                const parsedData = JSON.parse(data.substring(47).slice(0, -2));
                resolve(parsedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}

function processData(jsonData) {
    const tableBody = document.querySelector('#data-table tbody');
    const rows = jsonData.table.rows;

    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 7); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function processDataA(jsonDataA) {
    const tableBody = document.querySelector('#A-table tbody');
    const rows = jsonDataA.table.rows;

    for (let i = 0; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 5); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function processDataB(jsonDataB) {
    const tableBody = document.querySelector('#B-table tbody');
    const rows = jsonDataB.table.rows;

    for (let i = 0; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 5); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function processDataE(jsonDataE) {
    const tableBody = document.querySelector('#E-table tbody');
    const rows = jsonDataE.table.rows;

    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 2); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function processDataF(jsonDataF) {
    const tableBody = document.querySelector('#F-table tbody');
    const rows = jsonDataF.table.rows;

    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 2); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function processDataG(jsonDataG) {
    const tableBody = document.querySelector('#G-table tbody');
    const rows = jsonDataG.table.rows;

    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        const row = document.createElement('tr');

        for (let j = 0; j < Math.min(rowDataArray.length, 2); j++) {
            const cellData = rowDataArray[j] || '';
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}




function generatePieCharts(jsonData) {
    // Define chart data and options for each pie chart
    const chartConfigs = [
        {
            canvasId: 'it-chart',
            title: 'Total Pavilion Size (Sqm) :216 Sqm ',
            backgroundColor: ['springgreen','turquoise']
        },
        {
            canvasId: 'tn-chart',
            title: 'Total Pavilion Size (Sqm) :288 Sqm',
            backgroundColor: ['royalblue','steelblue']
        },
        {
            canvasId: 'country-chart',
            title: 'Total Pavilion Size (Sqm) : 72 Sqm',
            backgroundColor: ['gold','khaki']
        },
        {
            canvasId: 'yt-chart',
            title: 'Total Pavilion Size (Sqm) : 252 Sqm',
            backgroundColor: ['red', 'tomato']
        },
        {
            canvasId: 'startup-chart',
            title: 'Total no of Startup Stalls: 21 ',
            backgroundColor: ['deepskyblue', 'lightskyblue']
        },
        {
            canvasId: 'al-chart',
            title: 'Total no of Industry Stalls: 56',
            backgroundColor: ['dodgerblue', 'lightskyblue']
        },
        {
            canvasId: 'pod-chart',
            title: 'Total no of Startup pods: 52 ',
            backgroundColor: ['orangered', 'coral']
        }
    ];

    // Iterate over each chart configuration
    chartConfigs.forEach((config, index) => {
        // Extract data for the current chart from the appropriate row
        const rowData = jsonData.table.rows[index + 1]; // Adjust index to skip the header row and the previous charts' rows
        if (!rowData) {
            console.error('No data found for chart:', config.title);
            return; 
        }

        const rowDataArray = rowData.c.map(cellData => cellData ? cellData.v : '');
        console.log('Row Data Array:', rowDataArray); // Log rowDataArray for debugging

        const data = [
            parseInt(rowDataArray[5].match(/\d+/)[0]),
            parseInt(rowDataArray[6].match(/\d+/)[0])  
        ]; 
        console.log('Chart Data:', data); // Log data for debugging

        // Create a canvas element for the chart
        const canvas = document.getElementById(config.canvasId);
        const ctx = canvas.getContext('2d');

        // Create the chart instance
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Allocated', 'Yet to be allocated'],
                datasets: [{
                    data: data,
                    backgroundColor: config.backgroundColor
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: config.title,
                        color: 'navy',
                        position: 'bottom',
                        align: 'center',
                        font: {
                            weight: 'bold'
                        },
                        padding: 8,
                        fullSize: true
                    }
                }
            }
        });
    });
}
