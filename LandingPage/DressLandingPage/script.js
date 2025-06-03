// Wait for the DOM content to be loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Select all category boxes with a data-collection attribute
  const categoryBoxes = document.querySelectorAll('.category-box[data-collection]');

  categoryBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const collectionId = box.getAttribute('data-collection');
      
      // Hide all collections first
      document.querySelectorAll('.collection').forEach(collection => {
        collection.classList.add('hidden');
      });

      // Show the selected collection
      const selectedCollection = document.getElementById(collectionId);
      if (selectedCollection) {
        selectedCollection.classList.remove('hidden');
        // Scroll smoothly to the collection section
        selectedCollection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
