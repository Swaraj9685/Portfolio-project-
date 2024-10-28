document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll('.skill-level');

    // Intersection Observer to animate skill bars when they come into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const skillValue = skillLevel.getAttribute('data-skill');
                skillLevel.style.width = skillValue + '%'; // Set width to the data-skill value
            }
        });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is visible

    skillLevels.forEach(skill => {
        observer.observe(skill); // Start observing each skill bar
    });
});



