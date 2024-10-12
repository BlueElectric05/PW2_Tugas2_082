document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('.root');

    // Form and Result HTML
    const formHTML = `
        <div class="container rounded-4 shadow hWrapper">
            <h1 class="header">Tugas-2 Praktikum Pemrograman Web</h1>
        </div>
        <div class="main-content d-flex flex-column flex-lg-row gap-4">
            <!-- Form Section -->
            <form id="userForm" class="container p-4 rounded-4 shadow">
                <div>
                    <div>
                        <label for="usernameInput">Username</label>
                        <input type="text" id="usernameInput" placeholder="Luthfi Zahran Panggabean" required>
                    </div>
                    <div>
                        <label for="nimInput">NIM</label>
                        <input type="text" id="nimInput" placeholder="231401082" required>
                    </div>
                    <div>
                        <label for="komInput">KOM</label>
                        <input type="text" id="komInput" placeholder="A" required>
                    </div>
                    <div>
                        <label for="photoInput">Upload Photo</label>
                        <input type="file" id="photoInput" accept="image/png, image/jpg" required>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-dark pb-2 shadow align-self-center mt-4 mb-0 rounded-3">
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <!-- Result Section -->
            <div id="resultContainer" class="container p-4 rounded-4 shadow">
                <h5 class="mb-3">Result</h5>
                <div id="resultContent"></div>
            </div>
        </div>
    `;

    root.innerHTML = formHTML;

    const form = document.getElementById('userForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultContent = document.getElementById('resultContent');

    // Initially hide the result container
    resultContainer.style.display = 'none';

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('usernameInput').value;
        const nim = document.getElementById('nimInput').value;
        const kom = document.getElementById('komInput').value;
        const photo = document.getElementById('photoInput').files[0];

        const reader = new FileReader();
        reader.onload = function (event) {
            const photoURL = event.target.result;

            const resultHTML = `
                <img src="${photoURL}" class="card-img-top rounded-4 mb-3" alt="Uploaded Photo">
                <div class="card-body">
                    <h5>Username: ${username}</h5>
                    <p>NIM: ${nim}</p>
                    <p>KOM: ${kom}</p>
                </div>
            `;

            resultContent.innerHTML = resultHTML;

            // Display result container and trigger transition
            resultContainer.style.display = 'block';
            setTimeout(() => {
                resultContainer.classList.add('show'); // Add class to trigger transition
            }, 10); // Small delay to ensure the transition works
        };

        if (photo) {
            reader.readAsDataURL(photo);
        }
    });
});
