const boldElements = document.querySelectorAll('b');
        const tooltip = document.getElementById('tooltip');

        boldElements.forEach(boldElement => {
            boldElement.addEventListener('mouseenter', (event) => {
                const alternativeText = event.target.getAttribute('title');
                if (alternativeText) {
                    tooltip.textContent = alternativeText;
                    tooltip.style.display = 'block';
                    tooltip.style.left = `${event.pageX}px`;
                    tooltip.style.top = `${event.pageY + 10}px`;
                }
            });

            boldElement.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });