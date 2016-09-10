var webshot = require('webshot');
var urlencode = require('urlencode');

var url = 'http://localhost:8000/?content=%7B%20%22template%22:%20%7B%20%22backgroundImage%22:%20%22url%28%27http://res.cloudinary.com/cagatayc/image/upload/v1473390354/template.png%27%29%22,%20%22backgroundColor%22:%20%22#cccccc%22,%20%22backgroundRepeat%22:%20%22no-repeat%22,%20%22height%22:%20%221116px%22%20%7D,%20%22images%22:%20%5B%20%7B%20%22id%22:1,%20%22src%22:%20%22http://res.cloudinary.com/cagatayc/image/upload/v1473390360/racoon.png%22,%20%22property%22:%20%7B%20%22position%22:%20%22absolute%22,%20%22top%22:%20%22332px%22,%20%22left%22:%20%22430px%22,%20%22maxHeight%22:%20%22169px%22%20%7D%20%7D,%20%7B%20%22id%22:2,%20%22src%22:%20%22http://res.cloudinary.com/cagatayc/image/upload/v1473390360/racoon.png%22,%20%22property%22:%20%7B%20%22position%22:%20%22absolute%22,%20%22top%22:%20%22633px%22,%20%22left%22:%20%22217px%22,%20%22maxHeight%22:%20%22180px%22%20%7D%20%7D,%20%7B%20%22id%22:3,%20%22src%22:%20%22http://res.cloudinary.com/cagatayc/image/upload/v1473390360/racoon.png%22,%20%22property%22:%20%7B%20%22position%22:%20%22absolute%22,%20%22top%22:%20%22813px%22,%20%22left%22:%20%22-4px%22,%20%22maxHeight%22:%20%22180px%22%20%7D%20%7D%20%5D%20%7D';

webshot(url, 'demo2.png', {renderDelay: 2000}, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`Your image saved`);
});
