fetch(
  'https://whub.duckdns.org/api/weather/?id=&user=17&weather_station=&time=&time__gte=&time__lte='
)
  .then(response => {
    // Check if the response status code indicates success (e.g., 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // You can work with the JSON data here
    console.log(data.results);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
