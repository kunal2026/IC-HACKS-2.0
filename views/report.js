const patientReports = [
    { patientName: "Report 1", report: "Report 1", date: "2023-10-10" },
    { patientName: "Report 2", report: "Report 2", date: "2023-10-12" },
    { patientName: "Report 3", report: "Report 3", date: "2023-10-14" },
    { patientName: "Report 4", report: "Report 4", date: "2023-10-15" },
    { patientName: "Report 5", report: "Report 5", date: "2023-10-18" },
];

const reportList = document.querySelector(".report-list");

function populateReportList() {
    patientReports.forEach(report => {
        const reportItem = document.createElement("div");
        reportItem.classList.add("report-item");
        reportItem.innerHTML = `
            <h3>${report.patientName}</h3>
            <p><strong>Report:</strong> ${report.report}</p>
            <p><strong>Date:</strong> ${report.date}</p>
        `;
        reportList.appendChild(reportItem);
    });
}



populateReportList();
