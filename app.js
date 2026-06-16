// ======================
// SEARCH
// ======================

function searchTeachers() {

    const searchInput = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const filteredTeachers = teachers.filter(teacher => {

        return (
            teacher.name.toLowerCase().includes(searchInput) ||
            teacher.school.toLowerCase().includes(searchInput) ||
            teacher.phone.includes(searchInput)
        );

    });

    renderTeachers(filteredTeachers);

}

// ======================
// CARD RENDER
// ======================

function renderTeachers(list = teachers) {

    const container =
        document.getElementById("teacherList");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="teacher-card">
                <div class="teacher-info">
                    <div class="teacher-name">
                        কোনো তথ্য পাওয়া যায়নি
                    </div>
                </div>
            </div>
        `;

        return;
    }

    list.forEach(teacher => {

        container.innerHTML += `

        <div class="teacher-card">

            <div class="teacher-info">

                <div class="teacher-name">
                    ${teacher.name}
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

                <button
                    class="edit-btn"
                    onclick="goToEdit(${teacher.id})">
                    ✏️
                </button>

                <a
                    class="call-btn"
                    href="tel:${teacher.phone}">
                    📞
                </a>

            </div>

        </div>

        `;

    });

}

// ======================
// EDIT PAGE
// ======================

function goToEdit(id) {

    window.location.href =
        `edit.html?id=${id}`;

}

// ======================
// LOAD DATA
// ======================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderTeachers();

    }
);
