function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = 'Scenic Image';

    img.addEventListener('load', () => resolve(img))

    img.addEventListener('error', () => reject('img has NOT loaded'))
  })
}

try {
    const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
}   catch (error) {
    console.error(error)
}