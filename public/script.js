document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/api/check');
      const results = await response.json();
  
      const container = document.getElementById('checklist');
      results.forEach(({ rule, status }) => {
        const div = document.createElement('div');
        div.className = `result ${status.toLowerCase()}`;
        div.innerHTML = `<strong>${rule}:</strong> ${status}`;
        container.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching checklist results:", error);
    }
  });
  