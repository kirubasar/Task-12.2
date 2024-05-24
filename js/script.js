document.addEventListener('DOMContentLoaded', function () {
    
  document.getElementById('loadAuthorData').addEventListener('click', function() {
    fetch('https://openlibrary.org/search/authors.json?q=j%20k%20rowling')
      .then(response => response.json())
      .then(data => {
        const author = data.docs[0];
        const authorDataDiv = document.getElementById('authorData');
        // Clear any existing data
        authorDataDiv.innerHTML = '';
        // Create a new card for each property
        const card = `
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title">${author.type}</h1>
                  <p class="card-text"><b>Author NickNames:</b> ${author.alternate_names}<br></p>
                  <p class="card-text"><b>Author Name:</b> ${author.name}<br></p>
                  <p class="card-text"><b>Birth Date:</b> ${author.birth_date}<br></p>
                  <p class="card-text"><b>Author Name:</b> ${author.top_subjects}<br></p>
                  <p class="card-text"><b>Top Work:</b> ${author.top_work}<br></p>
                  <p class="card-text"><b>Top Subjects:</b> ${author.top_subjects}<br></p>
                  <p class="card-text"><b>Key and Version:</b> ${author.key} and ${author._version_}<br></p>
                  <p class="card-text"><b>Work Count:</b> ${author.work_count}</p>
                </div>
              </div>
            </div>
          `;
          authorDataDiv.innerHTML += card;
        })
        .catch(error => console.error(error));
      })
      
  });
  