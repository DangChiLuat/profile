var timeoutEnterId;

// Change image with mouse hover to gif
function changeImage(projectId, imageUrl) {

    timeoutEnterId = setTimeout(function () {

        var projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 500);

}

// Change image with mouse hover to gif
function returnImage(projectId, imageUrl) {

    clearTimeout(timeoutEnterId);
    setTimeout(function () {

        var projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.src = imageUrl;
        }
    }, 200);

}

// Handle mobile touch interactions: distinguish between scrolling and tapping
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        let touchStartX = 0;
        let touchStartY = 0;
        let isScrolling = false;

        const img = project.querySelector("img");
        if (!img) return;
        const projectId = img.id;
        const originalSrc = img.getAttribute("src") || img.src;

        project.addEventListener("touchstart", function (event) {
            isScrolling = false;
            if (event.touches.length > 0) {
                touchStartX = event.touches[0].clientX;
                touchStartY = event.touches[0].clientY;
            }
        }, { passive: true });

        project.addEventListener("touchmove", function (event) {
            if (event.touches.length > 0) {
                const deltaX = Math.abs(event.touches[0].clientX - touchStartX);
                const deltaY = Math.abs(event.touches[0].clientY - touchStartY);
                // Threshold of 10 pixels to determine if user is scrolling
                if (deltaX > 10 || deltaY > 10) {
                    isScrolling = true;
                }
            }
        }, { passive: true });

        project.addEventListener("touchend", function (event) {
            if (!isScrolling) {
                const target = event.target;
                // If user tapped a store link or button, let default behavior handle it
                if (target.closest('a') || target.closest('button')) {
                    return;
                }
                
                // Open the modal and prevent double-triggering simulated click events
                if (typeof openModal === "function") {
                    event.preventDefault();
                    openModal(projectId);
                }
            }

            // Restore image
            if (typeof returnImage === "function") {
                returnImage(projectId, originalSrc);
            }
        });

        project.addEventListener("touchcancel", function () {
            if (typeof returnImage === "function") {
                returnImage(projectId, originalSrc);
            }
        });
    });
});