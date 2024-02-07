const sheetId = '1UU6r25tKgOWeOLl4Dto402z3L4xj5-VQHuNf5xwwMPI';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'Sheet1'; 
const gid = '0'; // Update this with the correct gid of your sheet
const query = encodeURIComponent(`SELECT * WHERE A IS NOT NULL`); // Assuming your data starts from column A
const url = `${base}gid=${gid}&sheet=${sheetName}&tq=${query}`;

document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const jsonData = JSON.parse(data.substring(47).slice(0, -2));
            processData(jsonData);
            generatePieCharts(jsonData); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function processData(jsonData) {
    const tableBody = document.querySelector('#data-table tbody');
    const rows = jsonData.table.rows;

    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i];
        const rowDataArray = rowData.c.map(cellData => cellData && typeof cellData === 'object' ? cellData.v : cellData);

        // Create table row
        const row = document.createElement('tr');

        // Loop over the maximum number of cells (limited to 8)
        for (let j = 0; j < Math.min(rowDataArray.length, 8); j++) {
            const cellData = rowDataArray[j] || ''; // Use empty string if cellData doesn't exist
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        }

        // Add the row to the table body
        tableBody.appendChild(row);
    }
}









function generatePieCharts(jsonData) {
    // Define chart data and options for each pie chart
    const chartConfigs = [
        {
            canvasId: 'it-chart',
            title: 'IT Pavilion',
            backgroundColor: ['springgreen','turquoise']
        },
        {
            canvasId: 'tn-chart',
            title: 'Tamil Nadu Pavilion',
            backgroundColor: ['royalblue','steelblue']
        },
        {
            canvasId: 'country-chart',
            title: 'Country Pavilion',
            backgroundColor: ['gold','khaki']
        },
        {
            canvasId: 'yt-chart',
            title: 'Youtube Pavilion',
            backgroundColor: ['red', 'tomato']
        },
        {
            canvasId: 'startup-chart',
            title: 'Startup stalls',
            backgroundColor: ['deepskyblue', 'lightskyblue']
        },
        {
            canvasId: 'al-chart',
            title: 'Industry Stalls',
            backgroundColor: ['dodgerblue', 'lightskyblue']
        },
        {
            canvasId: 'pod-chart',
            title: 'Startup Pods',
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
