// Blog filter functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    // Function to apply filter
    function applyFilter(category) {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });

        // Filter posts
        blogPosts.forEach(post => {
            if (category === 'all') {
                post.style.display = 'block';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, 10);
            } else {
                if (post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    post.style.opacity = '0';
                    post.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        post.style.display = 'none';
                    }, 250);
                }
            }
        });
    }

    // Check URL hash and activate corresponding filter
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
        const filterMap = {
            'testing': 'testing',
            'stocks': 'stocks',
            'ai': 'ai'
        };

        if (filterMap[hash]) {
            applyFilter(filterMap[hash]);
        }
    }

    // Add click listeners to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            applyFilter(category);
        });
    });
});
