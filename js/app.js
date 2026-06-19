history.scrollRestoration = "manual";

// ======================
// SEARCH
// ======================

function searchTeachers() {
    const searchInput = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim()
        .normalize("NFC");

    document.getElementById("clearBtn").style.display = 
        searchInput.length > 0 ? "flex" : "none";

    const filteredTeachers = teachers.filter(teacher => {
        return (
            teacher.name.toLowerCase().normalize("NFC").includes(searchInput) ||
            teacher.school.toLowerCase().normalize("NFC").includes(searchInput) ||
            teacher.phone.includes(searchInput)
        );
    });

    renderTeachers(filteredTeachers);
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("clearBtn").style.display = "none";
    renderTeachers();
}

// ======================
// CARD RENDER
// ======================

function renderTeachers(list = teachers) {

    const container = document.getElementById("teacherList");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="teacher-card">
                <div class="teacher-info">
                    <div class="teacher-name">
                        কোনো তথ্য পাওয়া যায়নি
                    </div>
                </div>
            </div>
        `;
        return;
    }

    let html = "";

    list.forEach(teacher => {

        html += `
        <div class="teacher-card">

            <div class="teacher-info">

                <div class="card-top">
                    <h3 class="teacher-name">${teacher.name}</h3>

                    <button class="edit-btn" onclick="goToEdit('${teacher.id}')">
                        <svg viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            width="16"
                            height="16">

                            <path d="M12 20h9"/>
                            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>

                        </svg>
                    </button>
                </div>

                <div class="teacher-post">
                    ${teacher.designation}
                </div>

                <div class="teacher-school">
                    ${teacher.school}
                </div>

                <div class="teacher-phone">
                    ${teacher.phone}
                </div>

            </div>

            <div class="action-area">

                <a class="call-btn" href="tel:${teacher.phone}">
                    📞
                </a>

            </div>

        </div>
        `;

    });

    container.innerHTML = html;
}


// ======================
// INITIAL LOAD
// ======================

document.addEventListener("DOMContentLoaded", function () {
    renderTeachers();
});


// ======================
// EDIT NAVIGATION
// ======================

function goToEdit(id) {
    window.location.href = `edit.html?id=${id}`;
}


// ======================
// DEVELOPER PAGE
// ======================

function openDeveloperPage(){
    document.getElementById("developerPage").style.display = "block";
    document.querySelector(".header").style.display = "none";
    document.querySelector(".container").style.display = "none";
    
    history.pushState({page: "developer"}, "Developer Info");
}

function closeDeveloperPage(){
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".container").style.display = "block";
    document.getElementById("developerPage").style.display = "none";

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
}

window.addEventListener("popstate", function(event) {
    if(document.getElementById("developerPage").style.display === "block"){
        closeDeveloperPage();
    }
});
