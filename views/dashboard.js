
const departmentList = document.getElementById("departmentList");

departmentList.addEventListener("click", function (event) {
    const selectedDepartment = event.target.textContent;
    console.log("Selected Department:", selectedDepartment);
});
const patients = ["Patient 1", "Patient 2", "Patient 3", "Patient 4", "Patient 5", "Patient 6", "Patient 7", "Patient 8", "Patient 9", "Patient 10"];

const patientList = document.getElementById("patientList");
const lastFivePatients = patients.slice(-5);
lastFivePatients.forEach(patient => {
    const listItem = document.createElement("li");
    listItem.textContent = patient;
    patientList.appendChild(listItem);
});

patientList.addEventListener("click", function (event) {
    const selectedPatient = event.target.textContent;
    console.log("Selected Patient:", selectedPatient);
});

var dropdown = document.querySelector('.profile-dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function () {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.profile-button')) {
            dropdownContent.style.display = 'none';
        }
    });
    const appointments = [
        { patientName: "Patient 1", date: "2023-10-10" },
        { patientName: "Patient 2", date: "2023-10-12" },
        { patientName: "Patient 3", date: "2023-10-14" },
        { patientName: "Patient 4", date: "2023-10-15" },
        { patientName: "Patient 5", date: "2023-10-18" },
        { patientName: "Patient 6", date: "2023-10-20" },
    ];
    const appointmentList = document.getElementById("appointmentList");
    appointments.sort((a, b) => new Date(b.date) - new Date(a.date));
    const lastThreeAppointments = appointments.slice(0, 3);
    lastThreeAppointments.forEach(appointment => {
        const listItem = document.createElement("li");
        listItem.textContent = `${appointment.patientName} - ${appointment.date}`;
        appointmentList.appendChild(listItem);
    });
    appointmentList.addEventListener("click", function (event) {
        const selectedAppointment = event.target.textContent;
        console.log("Selected Appointment:", selectedAppointment);
    });
    