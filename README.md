# timecube.js

> When you need to fill up space with something more interesting than Lorem Ipsum 



# Install

```bash
npm install timecube
```

# Usage

```js
const timecube = require('timecube')

function PraiseFourCornerTime () {
    let sentenceCount = 5 
    let startIndex = 10 
    let timecubeBlock = timecube.generate(sentenceCount, startIndex)
    
    console.log(timecubeBlock)
}
```

# Parameters
### start: number (optional) 
default - 1

### stop: number (optional) 
default - timecube.maxLines


# License

MIT © [FullstackSoftwareInnovations](https://github.com/FullstackSoftwareInnovations)