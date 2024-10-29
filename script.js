let clickCount = 0;

document.addEventListener('click', function(event) {
    clickCount++;
    const n = 2;  // номер варіанту 
    const targetIndex = (n % 10) + 1;

    if (clickCount % targetIndex === 0) {
        const targetElement = document.getElementById(`element-${targetIndex}`);
        if (targetElement) {
     
            targetElement.style.backgroundColor = targetElement.style.backgroundColor === 'yellow' ? 'white' : 'yellow';
            targetElement.style.color = targetElement.style.color === 'blue' ? 'black' : 'blue';
        }
    } else {
        
        const nextElement = document.querySelector(`#element-${clickCount}`);
        if (nextElement) {
          
            nextElement.style.backgroundColor = nextElement.style.backgroundColor === 'green' ? 'white' : 'green';
            nextElement.style.color = nextElement.style.color === 'red' ? 'black' : 'red';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const image = document.getElementById('image');
    
    // Додавання зображення
    document.getElementById('add-image').addEventListener('click', () => {
        if (!document.getElementById('image')) {
            const newImage = document.createElement('img');
            newImage.id = 'image';
            newImage.src = 'default_89908.jpg';
            newImage.alt = 'Photo of Brussels';
            newImage.style.width = '600px';
            newImage.style.height = '500px';
            imageContainer.appendChild(newImage);
        }
    });

    // Збільшення розміру зображення
    document.getElementById('increase-size').addEventListener('click', () => {
        if (image) {
            image.style.width = (image.clientWidth * 1.2) + 'px';
            image.style.height = (image.clientHeight * 1.2) + 'px';
        }
    });

    // Зменшення розміру зображення
    document.getElementById('decrease-size').addEventListener('click', () => {
        if (image) {
            image.style.width = (image.clientWidth * 0.8) + 'px';
            image.style.height = (image.clientHeight * 0.8) + 'px';
        }
    });

    // Видалення зображення
    document.getElementById('remove-image').addEventListener('click', () => {
        if (image) {
            imageContainer.removeChild(image);
        }
    });
});

