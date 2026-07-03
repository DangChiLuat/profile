var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalDemo(projectId) {
    changeClass('demo-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickDemo);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var embeddedMedia = document.getElementById("youtubeVideo");
    returnBody();

    // Safely stop any iframe (YouTube video or HTML game)
    if (embeddedMedia) {
        embeddedMedia.src = "";
    }
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");

    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalDemo() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClickDemo);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickDemo(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalDemo();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>I'm Dang Luat, I specialize in both Unity and Cocos Creator. For me, building a successful product is a challenge. With my passion for games, I always strive to learn and improve in order to create better products.                                    </p>
                                </div>
                                <div class="project-description">
                                    <p>I love tackling complex technical challenges and learning new tech stacks. If you're looking for a driven developer with a track record of delivering engaging, cross-platform games,or simply want to connect and chat, let's connect!                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/cocos.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/Typescript.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/htmllanguage.png">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'demo':
            videoId = 'X4AbyjhvVHM?si=X_6ZS1wjPM4crLG3';
            projectContent = `
                            <div class="demo-title-bg">
                                <h2 class="project-title">Demo reel</h2>
                            </div>

                            <div class="demo-video-BG">
                            <div class="demo-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
Welcome! This is my demo reel showcasing a selection of my game development projects, highlighting the skills and creativity I've applied across different platforms. I hope you enjoy watching and feel inspired by the work!                                    </p>
                                </div>
                            </div>

                            <div class="demo-close">
                                <span onclick="closeModalDemo()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;

        case 'project1':
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Farm Tap</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/FarmTap_applovin.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project2':
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Screw out</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/Screw_Out_1.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project3':
            projectContent = `
                                <div class="title-bg">
                                <h2 class="project-title">Pool Go</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/PoolGo.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project4':
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Tidy Master</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/TM_V57.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project5':
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Dreamy Room</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/DreamyRoom.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project6':
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Piggy Away</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="1080" height="1920" src="Script/PiggyAway.html" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A puzzle game where you unscrew bolts in the right order to free objects. Built with Cocos Creator.</p>
                                </div>
                            </div>
                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project7':
            videoId = 'v4n0BYCbyhQ';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">The Pain Of Shadow</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                        Game The Pain Of Shadow.
                                    </p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project8':
            videoId = '_rkVQpotLIw?si=jvUrWaw5Q3xtb5Ub';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Energy Connection</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Promotional fighting game for Garena's partnership with Capcom's Street Fighter.

</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project9':
            videoId = '8RWrj6cPtd0?si=NjWYzSLpEmjNZJco';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cash Plane</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>VR experience debuted at BGS 2018 for SBT television channel.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project10':
            videoId = 'YI0jJG-jhSo?si=VpCqWNVHP1jQJTjO';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Shofu Ar Experience</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>AR game educating players about Shofu's teeth product molecules.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project11':
            videoId = 'Enegy.png';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Energy Connection</h2>
                            </div>

                            <div class="project-video-BG">
            
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Kenney Jam 2024 Energy Connection.</p>
                                </div>
                            </div>

                              <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://thefatman2108.itch.io/energy-connection" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Itch.png" alt="Github">
                                </a>                               
                             
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project12':
            videoId = 'piHodHzVQ28?si=nf1lvqtgdO9DZ8Jm';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Glitchers</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Fight alongside a dying heroine to assemble legendary armor and defeat an Emperor.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://store.steampowered.com/app/3534130/Glitchers/" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Steam.png" alt="Github">
                                </a>                               
                             
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

